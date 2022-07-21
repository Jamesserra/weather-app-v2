import React from "react";
import "./weatherDetails.css";

const WeatherDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="weatherBoxContainer">
      <div className="weatherHeader">
        <h1>Location</h1>
        <h2>Date</h2>
      </div>
      <div className="weatherBody">
        <div className="weatherBodyDetails">
          <div>Current Weather</div>
          <div>Current Temp</div>
        </div>
        <div className="weatherBodyExtra">
          <div className="extraCard">Low</div>
          <div className="extraCard">High</div>
          <div className="extraCard">Wind</div>
          <div className="extraCard">Rain</div>
          <div className="extraCard">Sunrise</div>
          <div className="extraCard">Sunset</div>
        </div>
      </div>
      <div>Hourly Forecast</div>
    </div>
  );
};

export default WeatherDetails;
