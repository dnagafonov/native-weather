import { geocoderAPI, weatherAPI } from "./axios";
import settings from "./settings.json";
import AsyncStorage from "@react-native-community/async-storage";
import { Alert } from "react-native";

export const getAddressFromCoordinates = async (latitude, longitude) => {
  const url = `reversegeocode.json?apiKey=${settings.hereApiKey}&mode=retrieveAddresses&language=en&prox=${latitude},${longitude}`;
  return await geocoderAPI
    .get(url)
    .then((res) => res.data.Response.View[0].Result[0].Location)
    .catch((e) => {
      Alert.alert("Error(getAddressFromCoordinates)", e.message);
      console.error("Error(getAddressFromCoordinates)", e.message);
    });
};

export const getWeather = async (latitude, longitude) => {
  const url = `forecast?lat=${latitude}&lon=${longitude}&limit=1`;
  return await weatherAPI
    .get(url)
    .then(res => res.data)
    .catch((e) => {
      Alert.alert("Error(getWeather)", e.message);
      console.error("Error(getWeather)", e.message);
    });
};

export const setHistoryToAS = async (history) => {
  try {
    await AsyncStorage.setItem("history", JSON.stringify(history));
  } catch (e) {
    Alert.alert("Error(setHistoryToAS)", e.message);
    console.error("Error(setHistoryToAS)", e.message);
  }
};

export const getHistoryFromAS = async () => {
  try {
    const history = await AsyncStorage.getItem("history");
    if (history === null) return [];
    const parsedHistory = history != "" ? JSON.parse(history) : [];
    return parsedHistory;
  } catch (e) {
    Alert.alert("Error(getHistoryFromAS)", e.message);
    console.error("Error(getHistoryFromAS)", e.message);
  }
};

export const clearHistoryInAS = async () => {
  try {
    await AsyncStorage.setItem("history", []);
  } catch (e) {
    Alert.alert("Error(clearHistoryInAS)", e.message);
    console.error("Error(clearHistoryInAS)", e.message);
  }
};
