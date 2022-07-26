import React from "react";
import "./weatherDetails.css";

const WeatherDetails = ({ data }) => {
  const newDate = (passedDate) => {
    let d = new Date(passedDate * 1000);
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let newTime = utc + 1000 * data.timezone;
    let nd = new Date(newTime);
    let time = new Intl.DateTimeFormat("en", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(nd);
    return time;
  };
  data.forecast.map((x) => console.log(x.weather[0].icon));
  return (
    <div className="weatherBoxContainer">
      <div className="weatherHeader">
        <h1>{data.name}</h1>
        <h2>Date</h2>
      </div>
      <div className="weatherBody">
        <div className="weatherBodyDetails">
          <img
            alt="weather-icon"
            src={`http://openweathermap.org/img/wn/${data.icon}@4x.png`}
          />
          <div>
            <p>{data.currentTemp}°F</p>
            <p>{data.description.toUpperCase()}</p>
          </div>
        </div>
        <div className="weatherBodyExtra">
          <div className="extraCard">
            <p>{data.lowTemp}°F</p>
            <p>Low</p>
          </div>
          <div className="extraCard">
            <p>{data.highTemp}°F</p>
            <p>High</p>
          </div>
          <div className="extraCard">
            <p>{Math.floor(data.wind)}mph</p>
            <p>Wind</p>
          </div>
          <div className="extraCard">
            <p>{data.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="extraCard">
            <p>{newDate(data.sunrise)}</p>
            <p>Sunrise</p>
          </div>
          <div className="extraCard">
            <p>{newDate(data.sunset)}</p>
            <p>Sunset</p>
          </div>
        </div>
      </div>
      <div className="weatherForecast">
        <div className="dailyForecast">
          {data.forecast.map((day) => (
            <div className="forecastCard">
              <img
                alt="weather-icon"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              />
              <p>{Math.round(day.temp.min)}</p>
              <p>{Math.round(day.temp.max)}</p>
            </div>
          ))}
        </div>
        <div className="dailyForecast">
          {data.forecast.map((day) => (
            <div className="forecastCard">
              <img
                alt="weather-icon"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              />
              <p>{Math.round(day.temp.min)}</p>
              <p>{Math.round(day.temp.max)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
