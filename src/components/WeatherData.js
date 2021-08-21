import React, { useContext } from "react";

import Context from "../Context";

import Weather from "./Weather";

const WeatherData = () => {
  const { weather, city, wind, sys } = useContext(Context);
  const { temp, humidity, pressure, feels_like } = weather;
  const { sunrise, sunset } = sys;
  const { speed } = wind;
  return (
    <Weather
      temp={temp}
      humidity={humidity}
      pressure={pressure}
      city={city}
      feels_like={feels_like}
      sunrise={sunrise}
      sunset={sunset}
      speed={speed}
    />
  );
};

export default WeatherData;
