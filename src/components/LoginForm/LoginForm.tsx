"use client";
import React from "react";
import styles from "./LoginForm.module.css";
import { Button } from "../Button/Button";

const LoginForm = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
      </div>
      <div className={styles.socialbtns}>
        <Button
          title=""
          variant="social"
          imgPath="/icon-google.svg"
          socialButtonName="Google"
        />
        <Button
          title=""
          variant="social"
          imgPath="/ios.svg"
          socialButtonName="Apple"
        />
      </div>
      <div className={styles.cardmain}>
        <form action="">
          <label htmlFor="email">Email address</label>
          <input type="email" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <a href="">Forgot password?</a>
          <Button
            title="Login"
            variant="text"
            hoverColor="blue"
            backgroundColor="pink"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
