import React from "react";
import { StyleSheet, Text, View, FileList, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function TablePageElement({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{item.address}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "300px",
    height: "100px",
    display: "flex",
    backgroundColor: "#f0f",
    alignItems: "center",
    justifyContent: "center",
  },
});
