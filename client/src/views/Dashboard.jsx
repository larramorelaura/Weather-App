import React from "react";
import Search from "../components/Search";
import styles from '../modules/Dashboard.module.css'

const Dashboard = () => {
  return <div>
    <div className={styles.dash}>
      <div className={styles.searchCenter}>
      <h3>Enter a City and State</h3>
        <Search isDashboard={true}/>
      </div>
    </div>
  </div>;
};

export default Dashboard;
