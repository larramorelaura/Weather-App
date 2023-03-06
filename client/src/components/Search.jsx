import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import styles from '../modules/Search.module.css';

const Search = (props) => {

  const [city, setCity] = useState("");
  const {isDashboard} = props;
  const navigate= useNavigate();

  // navigates to the forecast with the city as a param
  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate(`/forecast/${city}`);
  }

  return <div>
    <form onSubmit={handleSubmit} className={isDashboard ? styles.dashboardSearch: styles.navbar}>
      <input className="mx-2" type="text" name="city" onChange={(e)=>setCity(e.target.value)}/>
      <input type="submit" className="btn btn-sm btn-success" value="Get Weather"/>
    </form>
  </div>;
};

export default Search;
