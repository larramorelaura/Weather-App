import React from "react";
import {useParams} from 'react-router-dom';
import { formatDate } from "../helpers/formatDate.js";
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


  return( <div>
    {/* filter day based on the dt from the url and then map the data for display */}
  {forecast.filter((day)=> day.dt=== +dt).map((dayData, idx) => {
    //declared variables to clean up the html conditional rendering a little bit
    const dayMain= dayData.weather[0].main;
    const dayDesc= dayData.weather[0].description;
    return(
    <ul key={idx} className="list-unstyled pt-3">
      {/* conditional rendering of icons */}
      <li>
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
      <li>{formatDate(dayData.dt)}</li>
      <li>{dayDesc}</li>
      <li>High: {Math.round(dayData.temp.max)}</li>
      <li>Low: {Math.round(dayData.temp.min)}</li>
      <li>Humidity: {dayData.humidity}%</li>
    </ul>
  )})}
</div>
)};

export default WeatherDayForecast;
