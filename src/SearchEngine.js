import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Result.css";


export default function SearchEngine() {
  let [city, setCity] = useState("Vienna");
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      City: city,
      date: new Date(response.data.dt * 1000), 
      Temperature: response.data.main.temp,
      Humidity: response.data.main.humidity,
      Condition: response.data.weather[0].main,
      Wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5d69d77efd19c056bafcabc326753fce";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Select A City"
        id="search-text-input"
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="button" />
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        <div className="application">
          <div>
            {form}
          </div>
          <h2>The current weather is:</h2>
          <br />
          <span className="Date"><FormattedDate date={weather.date} /></span>
          <br />
          <ul>
            <li><WeatherTemperature celsius={weather.Temperature} /></li>
            <br />
            <li>Description: {weather.Condition}</li>
            <li>Humidity: {weather.Humidity}%</li>
            <li>Wind: {Math.round(weather.Wind)}km/h</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
