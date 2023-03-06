import axios from 'axios';

export function geoCodeData(city, apiKey){
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},US&limit=1&appid=${apiKey}`)
}

export function getWeatherData(lat, lon, apiKey){
    return axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`)
}