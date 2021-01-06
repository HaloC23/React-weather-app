import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <div className="row">
        <div className="col">
          <div className="header">
            <div className="float-left">
              <Icon code={props.data.icon} />
            </div>

            <h1 className="Main-city">{props.data.city}</h1>
            <h2>
              <FormattedDate date={props.data.date} />

              <div className="time">{props.data.time}</div>
            </h2>
            <p className="MainDescription">{props.data.description}</p>

            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
