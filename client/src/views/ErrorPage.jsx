import React from "react";
import Dog from '../assets/WeatherAppImages/images/pebbles.png';

const ErrorPage = () => {
  return <div className="text-center">
    <img style={{width: "300px", height:"auto"}} src={Dog} alt="corgi with toy"/>
    <p>This is not the page you were looking for. Please try another search in the search bar with the city and state</p>
  </div>;
};

export default ErrorPage;
