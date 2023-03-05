import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

const Search = () => {

  const [city, setCity] = useState("");
  const navigate= useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate(`/five-day/${city}`);
  }

  return <div>
    
    <form onSubmit={handleSubmit}>
      <input className="mx-2" type="text" name="city" onChange={(e)=>setCity(e.target.value)}/>
      <input type="submit" className="btn btn-success"/>
    </form>
  </div>;
};

export default Search;
