import React, { useState, useEffect } from "react";
import './Weather.css'

const SeoulWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = `${process.env.REACT_APP_OPENWEATHER_REST_API_KEY}`;
  

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&lang=kr&units=metric`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error("Error fetching the weather data", error));
  }, []);

  return (
    <div className="weatherText">
      {weatherData ? (
        <>
          {weatherData && (
  <>
    <h2>{weatherData.name}</h2>
    <p>Temperature: {weatherData.main?.temp}°C</p>
    <p>Weather: {weatherData.weather[0]?.description}</p>
    <p>Humidity: {weatherData.main?.humidity}%</p>
  </>
)}

        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default SeoulWeather;
