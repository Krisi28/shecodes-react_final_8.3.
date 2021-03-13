import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./Result.css";

export default function WeatherInfo(props) {
    return (
            <div className="container">
              <div className="application">
                <span className="Date"><FormattedDate date={props.data.date} /></span>
                <br />
                <ul className="result-list">
                  <li><WeatherTemperature celsius={props.data.temperature} /></li>
                  <br />
                  <li>Condition: {props.data.Condition}</li>
                  <li>Humidity: {props.data.Humidity}%</li>
                  <li>Wind: {Math.round(props.data.Wind)} km/h</li>
                  <li className="Icon"><WeatherIcon code={props.data.icon} /></li>
                </ul>
              </div>
            </div>
          );
    }