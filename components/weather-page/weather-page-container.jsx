import React, { useEffect, useState } from "react";
import Geolocation from "react-native-geolocation-service";
import WeatherPage from "./weather-page";
import { getAddressFromCoordinates, getWeather } from "../../tools/requests";

export default function WeatherPageContainer() {
  const [state, setstate] = useState({ data: "WeatherPage!", error: "", weather: null });
  console.log(state);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        getAddressFromCoordinates(
          position.coords.latitude,
          position.coords.longitude
        )
          .then((res) => {
            setstate(s => ({ ...s, data: res.Address.Label }));
            getWeather(
              res.DisplayPosition.Latitude,
              res.DisplayPosition.Longitude
            ).then(res => setstate(s => ({ ...s, weather: res.fact })))
          })
          .catch((e) => setstate(s => ({ ...s,  error: e })));
      },
      (error) => {
        setstate(s => ({ ...s, data: `Error: ${error.message}` }));
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 100000,
      }
    );
  }, []);
  return <WeatherPage data={state.data} error={state.error} weather={state.weather} />;
}
