import React from "react";
import {useParams} from 'react-router-dom';
import { formatDate } from "../helpers/formatDate.js";
import { getWeatherIcon } from "../helpers/weatherIcons.js";

const WeatherDayForecast = (props) => {
  const {forecast} = props;
  const {dt}=useParams();


  return( <div>
    {/* filter day based on the dt from the url and then map the data for display */}
  {forecast.filter((day)=> day.dt=== +dt).map((dayData) => {
    return(
    <ul key={dayData.dt} className="list-unstyled pt-3">
      {/* conditional rendering of icons */}
      <li>
        {getWeatherIcon(dayData.weather[0])}
      </li>
      <li>{formatDate(dayData.dt)}</li>
      <li>{dayData.weather[0].description}</li>
      <li>High: {Math.round(dayData.temp.max)}</li>
      <li>Low: {Math.round(dayData.temp.min)}</li>
      <li>Humidity: {dayData.humidity}%</li>
    </ul>
  )})}
</div>
)};

export default WeatherDayForecast;
