import React, { useState } from "react";
import { options, fetchData } from "../utils/fetchData";

import "./searchBox.css";

const SearchBox = ({ setData }) => {
  const [searchInput, setSearchInput] = useState("");

  let onSearchSubmit = (searchInputValue) => {
    const getData = async () => {
      const weatherData = await fetchData(
        `https://community-open-weather-map.p.rapidapi.com/weather?q=${searchInputValue}&units=imperial`,
        options
      );
      const weatherDataForecast = await fetchData(
        `https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${searchInputValue}&units=imperial`,
        options
      );
      setData({
        name: weatherData.name,
        id: weatherData.id,
        currentTemp: Math.floor(weatherData.main.feels_like),
        lowTemp: Math.floor(weatherData.main.temp_min),
        highTemp: Math.ceil(weatherData.main.temp_max),
        forecast: [...weatherDataForecast.list],
        humidity: weatherData.main.humidity,
        wind: weatherData.wind.speed,
        sunrise: weatherData.sys.sunrise,
        sunset: weatherData.sys.sunset,
        timezone: weatherData.timezone,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
      });
    };
    getData();
  };

  function handleInput(input) {
    setSearchInput(input);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onSearchSubmit(searchInput);
    event.target.reset();
  }

  return (
    <form className="searchBoxContainer" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="city"
        className="input"
        placeholder="Search Location Here"
        onChange={(event) => handleInput(event.target.value)}
      />
    </form>
  );
};

export default SearchBox;
