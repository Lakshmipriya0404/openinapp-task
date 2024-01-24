import React from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";

const SideBar = () => {
  const sidebarList = [
    { name: "Dashboard", imgpath: "/icons8-dashboard-32.png" },
    { name: "Upload", imgpath: "/icons8-upload-30.png" },
    { name: "Invoice", imgpath: "/icons8-invoice-24.png" },
    { name: "Schedule", imgpath: "/icons8-schedule-64.png" },
    { name: "Calendar", imgpath: "/icons8-calendar-50.png" },
    { name: "Notification", imgpath: "/icons8-notification-24.png" },
    { name: "Settings", imgpath: "/icons8-settings-50.png" },
  ];
  return (
    <div className={styles.sidebarwrap}>
      <Image src="/Logocompany.png" alt="" height="42" width="110" />
      <div className={styles.listwrap}>
        {sidebarList.map((item) => (
          <div key={item.name} className={styles.listitem}>
            <Image src={item.imgpath} alt="" height="30" width="30" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
