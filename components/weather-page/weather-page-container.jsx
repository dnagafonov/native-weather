import React, { useEffect } from "react";
import WeatherPage from "./weather-page";
import { getForecast } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { locationSelector } from "../../redux/selectors";

function WeatherPageContainer({ location, getForecast }) {
  useEffect(() => {
    getForecast();
  }, []);
  return (
    <WeatherPage
      address={location.address}
      weather={location.weather}
      coordinates={location.coordinates}
    />
  );
};

const mapState = state => ({
  location: locationSelector(state)
});

export default connect(mapState, { getForecast })(WeatherPageContainer);