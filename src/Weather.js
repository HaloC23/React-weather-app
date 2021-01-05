import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleRespsone(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      date: "Today",
      time: "Now"
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col">
            <div className="header">
              <img src={weatherData.icon} className="icon" alt="" />
              <h1 className="Main-city">{weatherData.city}</h1>
              <h2>
                {weatherData.date}
                <div className="time">{weatherData.time}</div>
              </h2>
              <p className="MainDescription">{weatherData.description}</p>

              <div>
                <strong className="hightemp">{weatherData.temperature}</strong>{" "}
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
  } else {
    const apiKey = "4bcfbdb544c93af9fee3bcc561f8a283";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleRespsone);
    return "Loading..";
  }
}
