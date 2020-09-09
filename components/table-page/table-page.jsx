import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TablePageElement from "./__element/table-page__element";
import PropTypes from "prop-types";

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

TablePage.propTypes = {
  history: PropTypes.arrayOf({
    location: PropTypes.exact({
      Latitude: PropTypes.number.isRequired,
      Longitude: PropTypes.number.isRequired,
    }),
    address: PropTypes.string.isRequired,
    weather: PropTypes.object.isRequired,
    time: PropTypes.number.isRequired,
  }),
  clearHistory: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundImage: "linear-gradient(141deg, #a1c4fd 0%, #c2e9fb 75%)",
  },
  list: {
    marginBottom: 10,
    alignSelf: "center",
  },
});
