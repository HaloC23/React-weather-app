import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Friday 4th Sept",
    description: "Cloudy",
    temperature: " 14",
    time: "16:23",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col">
          <div className="header">
            <img src={weatherData.imgUrl} className="icon" alt="" />
            <h1 className="Main-city">{weatherData.city}</h1>
            <h2>
              {weatherData.date}
              <div className="time">{weatherData.time}</div>
            </h2>
            <p className="Description1">{weatherData.description}</p>

            <div>
              {" "}
              <strong className="hightemp">{weatherData.temperature}</strong>
              <small>
                {" "}
                <a href="/" className="celsius-link">
                  °C{" "}
                </a>{" "}
                |{" "}
                <a href="/" className="fahrenheit-link">
                  °F{" "}
                </a>{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
