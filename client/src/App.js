import Dashboard from "./views/Dashboard";
import { Route, Routes } from "react-router-dom";
import FiveDay from "./views/FiveDay";
import OneDay from "./views/OneDay";



function App() {
  const apiKey=process.env.REACT_APP_apiKey;
  console.log(apiKey)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/five-day/:city' element={<FiveDay apiKey={apiKey}/>} />
        <Route path='/one-day/:city/:day' element={<OneDay apiKey={apiKey}/>} />
      </Routes>
    </div>
  );
}

export default App;
