import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TablePageElement from "./__element/table-page__element";

export default function TablePage({ history, clearHistory }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={history}
        renderItem={TablePageElement}
        keyExtractor={(e) => e.time.toString()}
      />
      <Button style={styles.button} onPress={clearHistory} title="Clean" />
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
  button: {
    backgroundColor: "#005fad",
    margin: "5px",
  },
});
