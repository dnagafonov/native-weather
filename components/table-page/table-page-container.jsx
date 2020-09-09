import React, { useEffect, useState } from "react";
import TablePage from "./table-page";
import { connect } from "react-redux";
import { historySelector } from "../../redux/selectors";
import TablePageEmpty from "./table-page-empty";
import { clearHistory } from "../../redux/actions/actions";
import { View, Button } from "react-native";
import WeatherPage from "../weather-page/weather-page";

function TablePageContainer({ history, clearHistory }) {
  const [openedId, setOpenedId] = useState(null);
  if (openedId) {
    const note = history.filter((e) => e.time === openedId)[0];
    return (
      <View style={{ flex: 1 }}>
        <WeatherPage
          address={note.address}
          coordinates={note.location}
          weather={note.weather}
        />
        <Button title="Close" color="#005fad" onPress={() => setOpenedId(null)} />
      </View>
    );
  }
  if (!history.length) return <TablePageEmpty />;
  return (
    <TablePage
      history={history}
      clearHistory={clearHistory}
      onPress={(id) => setOpenedId(id)}
    />
  );
}

const mapState = (state) => ({
  history: historySelector(state),
});

export default connect(mapState, { clearHistory })(TablePageContainer);
