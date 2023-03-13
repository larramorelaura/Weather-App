import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import { geoCodeData, getHourlyWeatherData } from "../api/api";
import { getCurrentTime } from "../helpers/currentTime";
import { formatDate } from "../helpers/formatDate";
import { formatHour } from "../helpers/formatHour";
import { getWeatherIcon } from "../helpers/weatherIcons";
import styles from '../modules/Hourly.module.css'

const HourlyForecast = (props) => {
    const {city}=useParams();
    const {apiKey}=props;
    const [formattedCity, setFormattedCity]= useState("")
    const [lat, setLat]=useState();
    const [lon, setLon]=useState();
    const [forecast, setForecast]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
    },[city, apiKey, navigate]);
  
    useEffect(()=>{
      if (lat && lon)
      {
        getHourlyWeatherData(lat, lon, apiKey)
        .then(res=>{
          console.log(res.data)
          setForecast(res.data)
          setIsLoading(false);
        })
        .catch(err=>{
          console.log(err);
          navigate("/error")})
      }
    },[lat, lon, apiKey, navigate]);
  
    if (isLoading) {
      return <div>Loading...</div>
    }
  
    return <div className="p-4">
      <h1>{formattedCity}</h1>
      <p>Hourly forecast as of: {getCurrentTime()}</p>
      <table className={`table table-striped ${styles.customTable}`}>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {forecast.hourly.slice(0,12).map((hour)=>{
            return(
              <>
                {formatHour(hour.dt)==="12 AM"&&
                    <tr>
                    <td colSpan="4"><strong className="text-secondary">{formatDate(hour.dt)}</strong></td>
                    </tr>
                  }
                <tr className={styles.tableRow} key={hour.dt}>
                  <td>{formatHour(hour.dt)}</td>
                  <td>{Math.round(hour.temp)}</td>
                  <td className={styles.formatIcon}>{getWeatherIcon(hour.weather[0])} <span>{hour.weather[0].description}</span></td>
                  <td>{hour.pop}%</td>
                  <td>{Math.round(hour.wind_speed)} mph</td>

                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>;
  };
  
  


export default HourlyForecast;
