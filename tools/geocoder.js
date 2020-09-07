import { geocoderAPI } from "./axios";
import settings from "./settings.json";

export const getAddressFromCoordinates = async (latitude, longitude) => {
  const url = `reversegeocode.json?apiKey=${settings.apiKey}&mode=retrieveAddresses&language=ru&prox=${latitude},${longitude}`;
  return await geocoderAPI
    .get(url)
    .then(res => res.data.Response.View[0].Result[0].Location)
    .catch((e) => {
      console.log("Error in getAddressFromCoordinates", e);
    });
};
