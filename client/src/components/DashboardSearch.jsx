import React, {useState} from "react";

const DashboardSearch = () => {
  const [city, setCity] = useState("");

  return <div>
    <form>
      <h3>Enter a City and State</h3>
      <div className="mb-3">
        <input  type="text" name="city" onChange={(e)=>setCity(e.target.value)}/>
      </div>
      <input  type="submit" className="btn btn-success"/>
    </form>
  </div>;
};

export default DashboardSearch;
