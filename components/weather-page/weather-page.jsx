import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function WeatherPage({ data, error }) {
  const text = error ? error : data;
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "30px",
    flex: 1,
    backgroundImage: "linear-gradient(141deg, #005fad 0%, #2cb5e8 75%)",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  content: {
    backgroundImage: "linear-gradient(141deg, rgba(212, 212, 212, 0.2) 0%, rgba(255, 255, 255, 0.3) 75%)",
    padding: "5px",
    borderRadius: "5px",
    maxWidth: "200px",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "700",
  },
});
