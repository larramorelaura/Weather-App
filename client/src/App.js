import Dashboard from "./views/Dashboard";
import { Route, Routes } from "react-router-dom";
import Forecast from "./views/Forecast";
import NavBar from "./components/NavBar";
import ErrorPage from "./views/ErrorPage";
import HourlyForecast from "./views/HourlyForecast";



function App() {
  const apiKey=process.env.REACT_APP_apiKey;
  console.log(apiKey)
  return (
    <div>
      <NavBar/>
      
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/forecast/:city' element={<Forecast apiKey={apiKey}/>} />
          <Route path='/forecast/hourly/:city' element={<HourlyForecast apiKey={apiKey}/>} />
          <Route path='/forecast/:city/:dt/oneday' element={<Forecast apiKey={apiKey} oneDay={true}/>} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/*' element={<ErrorPage />} />
          
        </Routes>
      
    </div>
  );
}

export default App;
