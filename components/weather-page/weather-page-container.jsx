import React, { useEffect } from "react";
import WeatherPage from "./weather-page";
import { getForecast } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { locationSelector } from "../../redux/selectors";
import PropTypes from "prop-types";

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

WeatherPageContainer.propTypes = {
  location: PropTypes.exact({
    coordinates: PropTypes.exact({
      Latitude: PropTypes.number.isRequired,
      Longitude: PropTypes.number.isRequired
    }),
    address: PropTypes.string.isRequired,
    weather: PropTypes.object
  }),
  getForecast: PropTypes.func.isRequired
};

const mapState = (state) => ({
  location: locationSelector(state),
});

export default connect(mapState, { getForecast })(WeatherPageContainer);
