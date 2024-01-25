import SideBar from "@/components/SideBar/SideBar";
import styles from "./dashboard.module.css";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.sidewrap}>
        <SideBar />
      </div>
      <div className={styles.mainwrap}>{children}</div>
    </div>
  );
}
