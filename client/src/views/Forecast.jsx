import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import { geoCodeData, getWeatherData } from "../api/api";
import WeatherDayForecast from "../components/WeatherDayForecast";
import WeatherWeekForecast from "../components/WeatherWeekForecast";
import styles from "../modules/Forecast.module.css";


const Forecast = (props) => {
  const {city}=useParams();
  const [formattedCity, setFormattedCity]= useState("")
  const [lat, setLat]=useState();
  const [lon, setLon]=useState();
  const [forecast, setForecast]=useState([]);
  const {apiKey, oneDay}= props;
  const navigate= useNavigate();

  useEffect(()=>{
    geoCodeData(city, apiKey)
    .then(res=>{
      // format the city to account for various user inputs(i.e. new york, ny or Dallas, tx) and provide a consistent display in the return 
      setFormattedCity(res.data[0].name +", " + res.data[0].state);
      setLat(res.data[0].lat)
      setLon(res.data[0].lon)
    })
    .catch(err=>{
      console.log(err);
      navigate("/error")})
  },[city]);

  useEffect(()=>{
    if (lat && lon)
    {
      getWeatherData(lat, lon, apiKey)
      .then(res=>{
        setForecast(res.data.daily)
      })
      .catch(err=>{
        console.log(err);
        navigate("/error")})
    }
  },[lat, lon]);

  return <div className={styles.forecast}>
    <h1>{formattedCity}</h1>

    {/* conditional rendering of the forecast data components based on type of forecast requested */}
    {
    oneDay?
    <WeatherDayForecast forecast={forecast}/>
    :
    <WeatherWeekForecast forecast={forecast}/>
    }
  </div>;
};

export default Forecast;
