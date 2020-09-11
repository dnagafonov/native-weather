import React from "react";
import { StyleSheet, View } from "react-native";
import WeatherContainer from "../weather/weather-container";
import TextContainer from "../text-container/text-container";
import PropTypes from "prop-types";

export default function WeatherPage({ address, weather, coordinates }) {
  return (
    <View style={styles.container}>
      <WeatherContainer weather={weather} />
      <TextContainer>{address}</TextContainer>
      <TextContainer>
        {coordinates
          ? coordinates.Latitude + ", " + coordinates.Longitude
          : null}
      </TextContainer>
    </View>
  );
}

WeatherPage.propTypes = {
  coordinates: PropTypes.exact({
    Latitude: PropTypes.number.isRequired,
    Longitude: PropTypes.number.isRequired,
  }),
  address: PropTypes.string.isRequired,
  weather: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    padding: "30px",
    flex: 1,
    backgroundImage: "linear-gradient(141deg, #a1c4fd 0%, #c2e9fb 75%)",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
