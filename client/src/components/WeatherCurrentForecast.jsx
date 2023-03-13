import React from "react";
import {Link, useParams} from 'react-router-dom'
import { formatDate } from "../helpers/formatDate";
import { getWeatherIcon } from "../helpers/weatherIcons";

const WeatherCurrentForecast = (props) => {
  const {city} = useParams();
  const {currentForecast} = props;
  console.log(currentForecast)
  return (
    <div>
      <p>
            <Link className="stretched-link text-decoration-none text-secondary" to={`/forecast/hourly/${city}`}>{formatDate(currentForecast.dt)}</Link>
      </p>    
      <ul className="list-unstyled pt-3">
        <li>{getWeatherIcon(currentForecast.weather[0])}</li>
        <li>{currentForecast.weather[0].description}</li>
        <li>Temp: {Math.round(currentForecast.temp)}&deg; F</li>
        <li>Feels Like: {Math.round(currentForecast.feels_like)}&deg; F</li>
        <li>Humidity: {Math.round(currentForecast.humidity)}%</li>
        <li>Wind: {Math.round(currentForecast.wind_speed)} mph</li>
      </ul>
    </div>
  );
};

export default WeatherCurrentForecast;
