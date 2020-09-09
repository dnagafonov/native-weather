import Geolocation from "react-native-geolocation-service";
import { types } from "./types";
import {
  getHistoryFromAS,
  setHistoryToAS,
  getAddressFromCoordinates,
  getWeather,
} from "../../tools/requests";
import { Alert } from "react-native";

export const updateHistory = () => async (dispatch) => {
  try {
    const history = JSON.parse(await getHistoryFromAS());
    dispatch(setHistory(history));
  } catch (e) {
    Alert.alert("Error(updateHistory)", e.message);
  }
};

export const addToHistory = (request) => async (dispatch) => {
  try {
    const history = await getHistoryFromAS();
    const parsedHistory = history != "" ? JSON.parse(history) : [];
    setHistoryToAS([...parsedHistory, request]);
    dispatch(updateHistory());
  } catch (e) {
    Alert.alert("Error(addToHistory)", e.message);
  }
};

export const setHistory = (history) => ({
  type: types.SET_HISTORY,
  history,
});

export const setLocation = (address, coordinates) => ({
  type: types.SET_LOCATION,
  address,
  coordinates,
});

export const setWeather = (weather) => ({
  type: types.SET_WEATHER,
  weather,
});

export const error = (msg) => {
  Alert.alert("Error :(", msg);
  return {
    type: types.ERROR,
  };
};

export const getForecast = () => (dispatch) => {
  Geolocation.getCurrentPosition(
    async (position) => {
      try {
        const forecast = await getAddressFromCoordinates(
          position.coords.latitude,
          position.coords.longitude
        );
        dispatch(setLocation(forecast.Address.Label, forecast.DisplayPosition));
        const weather = await getWeather(
          forecast.DisplayPosition.Latitude,
          forecast.DisplayPosition.Longitude
        );
        dispatch(setWeather(weather.fact));
        dispatch(
          addToHistory({
            location: forecast.DisplayPosition,
            address: forecast.Address.Label,
            weather: weather.fact,
            time: Date.now()
          })
        );
      } catch (e) {
        Alert.alert("Error :(", "check your internet connection");
        console.warn(e.message);
      }
    },
    (e) => Alert.alert("Error(getForecast)", e.message),
    {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 100000,
    }
  );
};
