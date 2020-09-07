import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Geolocation from "react-native-geolocation-service";
import Geocoder from "react-native-geocoding";
import WeatherPage from "./weather-page";
import { getAddressFromCoordinates } from "../../tools/geocoder";

export default function WeatherPageContainer() {
  const [state, setstate] = useState({ data: "WeatherPage!" });
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        getAddressFromCoordinates(position.coords.latitude, position.coords.longitude).then(res => {
          setstate({ data: res.Address.Label })
        })
      },
      (error) => {
        console.warn(error);
        setstate({ data: `Error: ${error.message}` });
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 100000,
      }
    );
  }, []);
  return <WeatherPage data={state.data}/>
}