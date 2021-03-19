import axios from "axios";
import React, { useState } from "react";
import "./Result.css";
import WeatherInfo from "./WeatherInfo.js";
export default function SearchEngine(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      Humidity: response.data.main.humidity,
      Condition: response.data.weather[0].main,
      Wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
    setLoaded(true);
  }
  function search() {
    let apiKey = "5d69d77efd19c056bafcabc326753fce";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
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
          <div>{form}</div>
          <span>
            <WeatherInfo data={weather} />
          </span>
        </div>
      </div>
    );
  } else {
    search();
    return form;
  }
}