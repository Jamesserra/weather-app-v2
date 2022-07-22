import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherDetails from "./components/WeatherDetails";
import { options, fetchData } from "./utils/fetchData";
import "./App.css";

function App() {
  const [data, setData] = useState([{}]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getData = async () => {
      const weatherData = await fetchData(
        "https://community-open-weather-map.p.rapidapi.com/weather?q=London&units=imperial",
        options
      );
      console.log(weatherData);
      setData({
        name: weatherData.name,
        id: weatherData.id,
        currentTemp: Math.floor(weatherData.main.feels_like),
        lowTemp: Math.floor(weatherData.main.temp_min),
        highTemp: Math.ceil(weatherData.main.temp_max),
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
  }, []);
  console.log(data);
  return (
    <div className="container">
      <SearchBox />
      <WeatherDetails data={data} />
    </div>
  );
}

export default App;
