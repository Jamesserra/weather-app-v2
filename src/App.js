import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherDetails from "./components/WeatherDetails";
import { options, fetchData } from "./utils/fetchData";
import "./App.css";

function App() {
  const [data, setData] = useState([
    {
      name: "",
      id: "",
      currentTemp: "",
      lowTemp: "",
      highTemp: "",
      wind: "",
      rain: "",
      sunrise: "",
      sunset: "",
      timezone: "",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const weatherData = await fetchData(
        "https://community-open-weather-map.p.rapidapi.com/weather?q=London&units=imperial",
        options
      );
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
      });
    };
    getData();
  }, []);

  return (
    <div className="container">
      <SearchBox />
      <WeatherDetails data={data} />
    </div>
  );
}

export default App;
