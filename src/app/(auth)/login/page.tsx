import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import LoginForm from "@/components/LoginForm/LoginForm";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homewrap}>
        <div className={styles.logo}></div>
        <h1 className={styles.header}>BASE</h1>
        <div className={styles.social}>
          <Image src={"/discord.svg"} alt={""} width={"30"} height={"30"} />
          <Image src={"/github.svg"} alt={""} width={"30"} height={"30"} />
          <Image src={"/linkedin.svg"} alt={""} width={"30"} height={"30"} />
          <Image src={"/twitter.svg"} alt={""} width={"30"} height={"30"} />
        </div>
      </div>
      <div className={styles.loginwrap}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
