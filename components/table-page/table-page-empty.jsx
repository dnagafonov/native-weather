import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TextContainer from "../text-container/text-container";
import AsyncStorage from "@react-native-community/async-storage";

export default function TablePageEmpty() {
  useEffect(() => {
    //AsyncStorage.setItem("history", JSON.stringify([]))
    //AsyncStorage.getItem("history").then(res => console.log(res));
  },[])
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
