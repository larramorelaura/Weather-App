import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import styles from '../modules/WeatherDayForecast.module.css';
import { ReactComponent as Clear } from '../assets/WeatherAppImages/images/weather-icons/Clear.svg';
import { ReactComponent as Clouds } from '../assets/WeatherAppImages/images/weather-icons/Clouds.svg';
import { ReactComponent as Rain } from '../assets/WeatherAppImages/images/weather-icons/Rain.svg';
import { ReactComponent as ModRain } from '../assets/WeatherAppImages/images/weather-icons/09d.svg';
import { ReactComponent as HeavyCloud } from '../assets/WeatherAppImages/images/weather-icons/03n.svg';
import { ReactComponent as LightClouds } from '../assets/WeatherAppImages/images/weather-icons/02d.svg';
import { ReactComponent as Snow } from '../assets/WeatherAppImages/images/weather-icons/13n.svg';
import { ReactComponent as Storm } from '../assets/WeatherAppImages/images/weather-icons/11d.svg';

const WeatherDayForecast = (props) => {
  const {forecast} = props;
  const {dt}=useParams();
  useEffect(()=>{
  console.log(forecast);
  console.log(dt)},[])
  return( <div className={styles.forecast}>
  {forecast.filter((day)=> day.dt=== +dt).map((dayData, idx) => {
    const date= new Date(dayData.dt * 1000)
    const formattedDate= date.toLocaleString("en-US", {weekday:"long", month: "short", day: "numeric"})
    return(
    <ul key={idx} className="list-unstyled">
      
      <li className={styles.color}>
        {dayData.weather[0].main ==="Clear" &&<Clear/>}
        {dayData.weather[0].main ==="Snow" &&<Snow/>}
        {dayData.weather[0].main ==="Thunderstorm" &&<Storm/>}
        {dayData.weather[0].main ==="Drizzle" || dayData.weather[0].description ==="light rain" &&<Rain/>}
        {dayData.weather[0].main ==="Rain" && dayData.weather[0].description !=="light rain" &&<ModRain/>}
        {dayData.weather[0].descrilition ==="overcast clouds" &&<HeavyCloud/>}
        {dayData.weather[0].description ==="broken clouds" &&<Clouds/>}
        {dayData.weather[0].description ==="few clouds" &&<LightClouds/>}
        {dayData.weather[0].description ==="scattered clouds" &&<LightClouds/>}
      </li>
      <li>{formattedDate}</li>
      <li>{dayData.weather[0].description}</li>
      <li>High: {Math.round(dayData.temp.max)}</li>
      <li>Low: {Math.round(dayData.temp.min)}</li>
      <li>Humidity: {dayData.humidity}%</li>
    </ul>
  )})}
</div>
)};

export default WeatherDayForecast;
