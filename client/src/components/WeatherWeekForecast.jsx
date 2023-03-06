import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from '../modules/WeatherWeekForecast.module.css'
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
      {forecast.filter((day, i)=> i<=4 ).map((day) => {
        const date= new Date(day.dt * 1000)
        const formattedDate= date.toLocaleString("en-US", {weekday:"long", month: "short", day: "numeric"})
        return (
        <ul key={day.dt} className="position-relative list-unstyled">
          <li className={styles.color}>
            {day.weather[0].main ==="Clear" &&<Clear/>}
            {day.weather[0].main ==="Snow" &&<Snow/>}
            {day.weather[0].main ==="Thunderstorm" &&<Storm/>}
            {day.weather[0].main ==="Drizzle" || day.weather[0].description ==="light rain" &&<Rain/>}
            {day.weather[0].main ==="Rain" && day.weather[0].description !=="light rain" &&<ModRain/>}
            {day.weather[0].descrilition ==="overcast clouds" &&<HeavyCloud/>}
            {day.weather[0].description ==="broken clouds" &&<Clouds/>}
            {day.weather[0].description ==="few clouds" &&<LightClouds/>}
            {day.weather[0].description ==="scattered clouds" &&<LightClouds/>}
            </li>
          <Link className="stretched-link" to={{pathname:`/forecast/${city}/${day.dt}/oneday`}}><li>
            {formattedDate}</li>
          </Link>
        </ul>
      )})}
    </div>
  );
};

export default WeatherWeekForecast;
