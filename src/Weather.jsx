import React from "react";

const Weather = ({ data }) => {
  const { name, weather, main, wind } = data;

  return (
    <div style={{ border: "1px solid black", padding: "20px", marginTop: "20px" }}>
      <h2>Weather in {name}</h2>
      <p><strong>Condition:</strong> {weather[0].description}</p>
      <p><strong>Temperature:</strong> {main.temp}°C</p>
      <p><strong>Feels Like:</strong> {main.feels_like}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
      <p><strong>Pressure:</strong> {main.pressure} hPa</p>
    </div>
  );
};

export default Weather;