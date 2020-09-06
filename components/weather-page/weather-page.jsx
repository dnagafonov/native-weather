import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Geolocation from "react-native-geolocation-service";
import Geocoder from "react-native-geocoding";

export default function WeatherPage() {
  const [state, setstate] = useState({ data: "WeatherPage!" });
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        Geocoder.init("AIzaSyD0VAsqumZ8Te3wapkonozl7Qjqpy6dfrI");
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then((json) => {
            var addressComponent = json.results[0].address_components[0];
            setstate({ data: addressComponent });
          })
          .catch((error) => {
            console.warn(error);
            setstate({ data: `Error: ${error.message}` });
          });
      },
      (error) => {
        // См. таблицы кодов ошибок выше.
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
  return (
    <View style={styles.container}>
      <Text>{state.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "10px",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
