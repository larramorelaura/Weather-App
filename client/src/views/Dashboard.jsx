import React from "react";
import DashboardSearch from "../components/DashboardSearch";
import NavBar from "../components/NavBar";
import Search from "../components/Search";

const Dashboard = () => {
  return <div>
    <NavBar />
    <div className="my-auto mx-auto align-items-center text-center" style={{height: "100vh"}}>
      <DashboardSearch />
    </div>
  </div>;
};

export default Dashboard;
