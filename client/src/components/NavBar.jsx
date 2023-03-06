import React from "react";
import Search from "./Search";
import styles from '../modules/NavBar.module.css'

const NavBar = () => {
  return <div className={styles.nav}>
    <h2>My Weather App</h2>
    <Search />
  </div>;
};

export default NavBar;
