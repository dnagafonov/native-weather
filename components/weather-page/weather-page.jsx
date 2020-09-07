import React from "react";
import { StyleSheet, View, Text } from "react-native";
import WeatherContainer from "../weather/weather-container";
import TextContainer from "../text-container/text-container";

export default function WeatherPage({ data, error, weather, coordinates }) {
  const text = error ? error : data;
  return (
    <View style={styles.container}>
      <WeatherContainer weather={weather} />
      <TextContainer text={text} />
      <TextContainer text={coordinates} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "30px",
    flex: 1,
    backgroundImage: "linear-gradient(141deg, #005fad 0%, #2cb5e8 75%)",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
