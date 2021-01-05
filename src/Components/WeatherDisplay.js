import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./Components/WeatherIcon";
import WeatherTemp from "./Components/WeatherTemp";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="row">
        <div className="col">
          <div className="header">
            <img src={props.data.icon} className="icon" alt="weatherIcon" />
            <h1 className="Main-city">{props.data.city}</h1>
            <h2>
              <FormattedDate date={props.data.date} />
              <div className="time">{props.data.time}</div>
            </h2>
            <p className="MainDescription">{props.data.description}</p>

            <div>
              <strong className="hightemp">{props.data.temperature}</strong>{" "}
              <a href="/" className="celsius-link">
                °C{" "}
              </a>{" "}
              |{" "}
              <a href="/" className="fahrenheit-link">
                {" "}
                °F{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
