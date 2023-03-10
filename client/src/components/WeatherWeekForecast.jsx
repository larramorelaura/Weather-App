import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from '../modules/WeatherWeekForecast.module.css';
import { formatDate } from "../helpers/formatDate.js";
import { getWeatherIcon } from "../helpers/weatherIcons.js";

const WeatherWeekForecast = (props) => {
  const {forecast} = props;
  const {city}= useParams();
  return (
    <div className={styles.forecast}>
      {/* filtering results to only show five days and map through for display */}
      {forecast.filter((day, i)=> i<=4 ).map((day) => {
        //declared variables to clean up the html conditional rendering a little bit
        const dayMain= day.weather[0].main;
        const dayDesc= day.weather[0].description;
        return (
        <ul key={day.dt} className="position-relative list-unstyled">
          <li className={styles.icon}>
            {getWeatherIcon(day.weather[0])}
            </li>
          <li>
            <Link className="stretched-link text-decoration-none text-secondary" to={`/forecast/${city}/${day.dt}/oneday`}>{formatDate(day.dt)}</Link>
          </li>
        </ul>
      )})}
    </div>
  );
};

export default WeatherWeekForecast;
