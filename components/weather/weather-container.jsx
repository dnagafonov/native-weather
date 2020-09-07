import React from "react";
import Weather from "./weather";

export default function WeatherContainer({ weather }) {
  if(!weather) return null;
  const { icon, temp } = weather;
  return (
    <Weather temp={temp} icon={icon} />
  );
}
