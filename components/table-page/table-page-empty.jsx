import React from "react";
import { View, StyleSheet } from "react-native";
import TextContainer from "../text-container/text-container";

export default function TablePageEmpty() {
  return (
    <View style={styles.container}>
      <TextContainer style={styles.content}>It's empty :(</TextContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to top, #ace0f9 0%, #a1c4fd 100%)"
  },
  content: {
    padding: "5px",
    fontSize: "1.3rem",
  },
});
