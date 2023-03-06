import React from "react";
import DashboardSearch from "../components/DashboardSearch";
import styles from '../modules/Dashboard.module.css'

const Dashboard = () => {
  return <div>
    <div className={styles.dash}>
      <div className={styles.searchCenter}>
        <DashboardSearch/>
      </div>
    </div>
  </div>;
};

export default Dashboard;
