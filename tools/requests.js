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
    });
};

export const getWeather = async (latitude, longitude) => {
  const url = `forecast?lat=${latitude}&lon=${longitude}&limit=1`;
  return await weatherAPI
    .get(url)
    .then((res) => res.data)
    .catch((e) => Alert.alert("Error(getWeather)", e.message));
};

export const setHistoryToAS = async (history) => {
  try {
    await AsyncStorage.setItem("history", JSON.stringify(history));
  } catch (e) {
    Alert.alert("Error(setHistoryToAS)", e.message);
  }
};

export const getHistoryFromAS = async () => {
  try {
    return await AsyncStorage.getItem("history");
  } catch (e) {
    Alert.alert("Error(getHistoryFromAS)", e.message);
  }
};
