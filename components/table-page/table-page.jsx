import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TablePageElement from "./__element/table-page__element";
import AsyncStorage from "@react-native-community/async-storage";

export default function TablePage({ history }) {
  const onPress = async () => {
    await AsyncStorage.setItem("history", [])
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={history}
        renderItem={TablePageElement}
        keyExtractor={(e) => e.time}
      />
      <Button onPress={onPress} title="Clean" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
