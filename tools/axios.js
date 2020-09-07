import axios from "axios";
import settings from "./settings.json";

export const geocoderAPI = axios.create({
  baseURL: "https://reverse.geocoder.ls.hereapi.com/6.2",
});

export const weatherAPI = axios.create({
  baseURL: "https://api.weather.yandex.ru/v2",
  headers: { "X-Yandex-API-Key": settings.yandexApiKey },
});