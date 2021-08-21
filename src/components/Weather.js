import React from "react";
import location_img from "./images/location.svg";
import feels_like_img from "./images/temperature-feels-like.svg";
import pressure_img from "./images/pressure.svg";
import sunrise_img from "./images/sunrise.svg";
import sunset_img from "./images/sunset.svg";
import temperature_img from "./images/temperature.svg";
import humidity_img from "./images/humidity.svg";
import wind_img from "./images/wind.svg";
const date = new Date();
const Weather = ({
  city,
  temp,
  humidity,
  pressure,
  feels_like,
  sunrise,
  sunset,
  speed,
}) => {
  return (
    <div className="weather-data">
      <p>
        Weather forecast for <img src={location_img} alt={"img"} />
        <span className="weather-data__city">{city}</span>
      </p>
      <p
        style={{ paddingTop: "0.5rem" }}
      >{`Date: ${date.toLocaleDateString()}  \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Time: ${date.toLocaleTimeString(
        [],
        { timeStyle: "short" }
      )}`}</p>
      <div className="weather-data__box">
        <div className="sys">
          <p>
            <img src={temperature_img} alt={"img"} />
            Temperature : {temp}°C
          </p>
          <p>
            <img src={feels_like_img} alt={"img"} />
            Feels Like : {feels_like}°C
          </p>
          <p>
            <img src={humidity_img} alt={"img"} />
            Humidity : {humidity}%
          </p>
          <p>
            <img src={pressure_img} alt={"img"} />
            Pressure : {pressure} mBar
          </p>
        </div>
        <div className="sys">
          <p>
            <img src={sunrise_img} alt={"img"} />
            Sunrise : {sunrise}
          </p>
          <p>
            <img src={sunset_img} alt={"img"} />
            Sunset : {sunset}
          </p>
          <p>
            <img src={wind_img} alt={"img"} />
            Wind Speed : {speed}km/h
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
