import React, { useState } from "react";
import "../style.css";
import Title from "./Title";
import Tagline from "./Tagline";
import axios from "axios";
import Context from "../Context";
import Error from "./Error";
import WeatherData from "./WeatherData";
import WeatherSearch from "./WeatherSearch";
const API_KEY = "fac99780d97eccfc4f86af53fb185ff1";
function Main() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [wind, setWind] = useState(null);
  const [sys, setSys] = useState(null);
  const [error, setError] = useState(null);
  const call = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (!city) {
      return (
        setError("Please Enter the name of the city"),
        setWeather(null),
        setSys(null),
        setWind(null)
      );
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const response = await request;
    setError(null);
    setWeather(response.data.main);
    setCity(response.data.name);
    let date = new Date(response.data.sys.sunset * 1000);
    let hours = date.getHours(); // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes(); // Seconds part from the timestamp
    let sunset = hours + ":" + minutes.substr(-2);

    let date2 = new Date(response.data.sys.sunrise * 1000);
    let hours2 = date2.getHours(); // Minutes part from the timestamp
    let minutes2 = "0" + date2.getMinutes(); // Seconds part from the timestamp
    let sunrise = hours2 + ":" + minutes2.substr(-2);
    let k = {
      sunset,
      sunrise,
    };
    setSys(k);

    setWind(response.data.wind);
  };
  return (
    <div className="hehe">
      <Title />
      <div className="wrap">
        <Context.Provider value={{ call, weather, city, wind, sys }}>
          <Tagline />
          <WeatherSearch />
          {error !== null && <p>{<Error error={error} />}</p>}
          {weather !== null && sys !== null && wind !== null && <WeatherData />}
        </Context.Provider>
      </div>
    </div>
  );
}

export default Main;
