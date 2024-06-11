import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="weather-display">
      {weather ? <WeatherCard weather={weather} /> : <p>No se encontro</p>}
    </div>
  );
};

export default WeatherDisplay;
