import Dashboard from "./views/Dashboard";
import { Route, Routes } from "react-router-dom";
import Forecast from "./views/Forecast";
import NavBar from "./components/NavBar";



function App() {
  const apiKey=process.env.REACT_APP_apiKey;
  console.log(apiKey)
  return (
    <div>
      <NavBar/>
      
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/forecast/:city' element={<Forecast apiKey={apiKey}/>} />
          <Route path='/forecast/:city/:dt/oneday' element={<Forecast apiKey={apiKey} oneDay={true}/>} />
          
        </Routes>
      
    </div>
  );
}

export default App;
