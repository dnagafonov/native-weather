import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherPage({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "10px",
    flex: 1,
    backgroundImage: "linear-gradient(141deg, #005fad 0%, #2cb5e8 75%)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "700",
  },
});
