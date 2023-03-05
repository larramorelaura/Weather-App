import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const OneDay = (props) => {
  const {city}=useParams();
  const [lat, setLat]=useState();
  const [lon, setLon]=useState();
  const {apiKey}= props;


  
  useEffect(()=>{
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},US&limit=1&appid=${apiKey}`)
    .then(res=>{
      console.log(res.data);
      setLon(res.data[0].lon);
      setLat(res.data[0].lat);
  })
    .catch(err=>console.log(err))
  },[city]);

  useEffect(()=>{
    console.log (`lat is ${lat}`)
    console.log (`lon is ${lon}`)
    if (lat && lon)
    {
      axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&dt=1678125600&appid=${apiKey}`)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
    }
  },[lat, lon]);

  return <div>
    <NavBar />
  </div>;
};

export default OneDay;
