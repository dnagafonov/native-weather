import axios from "axios";

export const geocoderAPI = axios.create({
  baseURL: 'https://reverse.geocoder.ls.hereapi.com/6.2'
});