import React from "react";
import { StyleSheet, View } from "react-native";
import WeatherContainer from "../weather/weather-container";
import TextContainer from "../text-container/text-container";

export default function WeatherPage({ data, error, weather, coordinates }) {
  const text = error ? error : data;
  return (
    <View style={styles.container}>
      <WeatherContainer weather={weather} />
      <TextContainer>{text}</TextContainer>
      <TextContainer>{coordinates}</TextContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "30px",
    flex: 1,
    backgroundImage: "linear-gradient(141deg, #a1c4fd 0%, #c2e9fb 75%)",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
