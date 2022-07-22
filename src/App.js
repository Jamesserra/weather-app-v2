import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";

function App() {
  const [data, setData] = useState([{}]);
  console.log(data);
  return (
    <div className="container">
      <SearchBox setData={setData} />
      {data.name !== undefined ? <WeatherDetails data={data} /> : ""}
    </div>
  );
}

export default App;
