import React, { useState } from "react";
import TablePage from "./table-page";
import { connect } from "react-redux";
import { historySelector } from "../../redux/selectors";
import TablePageEmpty from "./table-page-empty";
import { clearHistory } from "../../redux/actions/actions";
import { View, Button } from "react-native";
import WeatherPage from "../weather-page/weather-page";
import PropTypes from "prop-types";

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
        <Button
          title="Close"
          color="#005fad"
          onPress={() => setOpenedId(null)}
        />
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
};

const mapState = (state) => ({
  history: historySelector(state),
});

export default connect(mapState, { clearHistory })(TablePageContainer);
