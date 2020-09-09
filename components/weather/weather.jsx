import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp, icon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{temp}°C</Text>
      <Image
        style={styles.tinyLogo}
        source={`https://yastatic.net/weather/i/icons/blueye/color/svg/${icon}.svg`}
      />
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    padding: "20px",
    width: "200px",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    boxSizing: "content-box",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: "2rem",
  },
});
