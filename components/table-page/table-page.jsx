import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TablePageElement from "./__element/table-page__element";

export default function TablePage({ history, clearHistory, onPress }) {
  const item = ({ item }) => <TablePageElement onPress={onPress} item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={history}
        renderItem={item}
        keyExtractor={(e) => e.time.toString()}
      />
      <Button onPress={clearHistory} title="Clean history" color="#005fad" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundImage: "linear-gradient(141deg, #a1c4fd 0%, #c2e9fb 75%)",
  },
  list: {
    marginBottom: 10,
    alignSelf: "center"
  }
});
