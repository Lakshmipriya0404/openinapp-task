import React from "react";
import styles from "./dashboard.module.css";
import SideBar from "@/components/SideBar/SideBar";

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidewrap}>
        <SideBar />
      </div>
      <div className={styles.mainwrap}></div>
    </div>
  );
};

export default DashboardPage;
