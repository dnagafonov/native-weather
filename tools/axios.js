import axios from "axios";

export const geocoderAPI = axios.create({
  baseURL: "https://reverse.geocoder.ls.hereapi.com/6.2",
});

export const weatherAPI = axios.create({
  baseURL: "https://us-central1-native-weather-server.cloudfunctions.net/app",
});