import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
    return (
            <div className="container">
              <div className="application">
                <h2>The current weather is:</h2>
                <br />
                <span className="Date"><FormattedDate date={props.data.date} /></span>
                <br />
                <ul className="result-list">
                  <li><WeatherTemperature celsius={props.data.temperature} /></li>
                  <br />
                  <li>Description: {props.data.Condition}</li>
                  <li>Humidity: {props.data.Humidity}%</li>
                  <li>Wind: {props.data.Wind} km/h</li>
                  <li className="Icon"><WeatherIcon code={props.data.icon} /></li>
                </ul>
              </div>
            </div>
          );
    }