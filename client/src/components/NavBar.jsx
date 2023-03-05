import React from "react";
import Search from "./Search";

const NavBar = () => {
  return <div className="d-flex justify-content-between mx-5">
    <h2>My Weather App</h2>
    <Search />
  </div>;
};

export default NavBar;
