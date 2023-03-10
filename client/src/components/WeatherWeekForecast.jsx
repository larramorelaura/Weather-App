import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from '../modules/WeatherWeekForecast.module.css';
import { formatDate } from "../helpers/helperFunction.js";
import { ReactComponent as Clear } from '../assets/WeatherAppImages/images/weather-icons/Clear.svg';
import { ReactComponent as Clouds } from '../assets/WeatherAppImages/images/weather-icons/Clouds.svg';
import { ReactComponent as LightClouds } from '../assets/WeatherAppImages/images/weather-icons/02d.svg';
import { ReactComponent as Rain } from '../assets/WeatherAppImages/images/weather-icons/Rain.svg';
import { ReactComponent as ModRain } from '../assets/WeatherAppImages/images/weather-icons/09d.svg';
import { ReactComponent as HeavyCloud } from '../assets/WeatherAppImages/images/weather-icons/03n.svg';
import { ReactComponent as Snow } from '../assets/WeatherAppImages/images/weather-icons/13n.svg';
import { ReactComponent as Storm } from '../assets/WeatherAppImages/images/weather-icons/11d.svg';

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
            {dayMain ==="Clear" &&<Clear/>}
            {dayMain ==="Snow" &&<Snow/>}
            {dayMain ==="Thunderstorm" &&<Storm/>}
            {dayMain ==="Drizzle" || dayDesc ==="light rain" &&<Rain/>}
            {dayMain ==="Rain" && dayDesc !=="light rain" &&<ModRain/>}
            {dayDesc ==="overcast clouds" &&<HeavyCloud/>}
            {dayDesc ==="broken clouds" &&<Clouds/>}
            {dayDesc ==="few clouds" &&<LightClouds/>}
            {dayDesc ==="scattered clouds" &&<LightClouds/>}
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
