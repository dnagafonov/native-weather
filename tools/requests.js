import { geocoderAPI, weatherAPI } from "./axios";
import settings from "./settings.json";
import AsyncStorage from "@react-native-community/async-storage";

export const getAddressFromCoordinates = async (latitude, longitude) => {
  const url = `reversegeocode.json?apiKey=${settings.hereApiKey}&mode=retrieveAddresses&language=ru&prox=${latitude},${longitude}`;
  return await geocoderAPI
    .get(url)
    .then((res) => res.data.Response.View[0].Result[0].Location)
    .catch((e) => {
      console.log("Error in getAddressFromCoordinates", e);
    });
};

export const getWeather = async (latitude, longitude) => {
  const url = `forecast?lat=${latitude}&lon=${longitude}&limit=1`;
  return await weatherAPI.get(url).then((res) => res.data);
};

export const setHistoryToAS = async (history) => {
  try {
    await AsyncStorage.setItem("history", JSON.stringify(history));
  } catch (err) {
    console.warn("Error", err)
  }
};

export const getHistoryFromAS = async () => {
  try {
    await AsyncStorage.getItem("history");
  } catch (err) {
    console.warn("Error", err)
  }
};
