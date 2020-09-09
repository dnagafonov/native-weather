import React from "react";
import Weather from "./weather";
import TextContainer from "../text-container/text-container";
import PropTypes from "prop-types";

export default function WeatherContainer({ weather }) {
  if (!weather) return <TextContainer text={null} />;
  const { icon, temp } = weather;
  return <Weather temp={temp} icon={icon} />;
}

WeatherContainer.propTypes = {
  weather: PropTypes.object
}