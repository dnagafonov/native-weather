import React from "react";
import Weather from "./weather";
import TextContainer from "../text-container/text-container";

export default function WeatherContainer({ weather }) {
  if(!weather) return <TextContainer text={null} />;
  const { icon, temp } = weather;
  return (
    <Weather temp={temp} icon={icon} />
  );
}
