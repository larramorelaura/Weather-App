import React from "react";
import {Link} from "react-router-dom";
import Search from "./Search";
import styles from "../modules/NavBar.module.css";

const NavBar = () => {
  return <div className={styles.nav}>
    <Link className="text-decoration-none text-white" to={'/'}><h2>My Weather App</h2></Link>
    <Search isDashboard={false}/>
  </div>;
};

export default NavBar;
