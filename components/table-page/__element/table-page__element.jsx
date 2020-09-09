import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default function TablePageElement({ item, onPress }) {
  const coordinates = `${item.location.Latitude}, ${item.location.Longitude}`;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(item.time)}
    >
      <Text style={styles.coordinates}>{coordinates}</Text>
      <View style={styles.info}>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.time}>{new Date(item.time).toISOString()}</Text>
      </View>
    </TouchableOpacity>
  );
}

TablePageElement.propTypes = {
  item: PropTypes.exact({
    location: PropTypes.exact({
      Latitude: PropTypes.number.isRequired,
      Longitude: PropTypes.number.isRequired
    }),
    address: PropTypes.string.isRequired,
    weather: PropTypes.object.isRequired,
    time: PropTypes.number.isRequired
  }),
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    width: "300px",
    height: "100px",
    padding: 5,
    marginBottom: 10,
    display: "flex",
    backgroundColor: "#f0f",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "5px",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  time: {
    width: "115px",
  },
  address: {
    width: "175px",
  },
  coordinates: {
    fontSize: "0.7rem",
  },
});
