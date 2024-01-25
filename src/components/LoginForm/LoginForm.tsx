"use client";
import React from "react";
import styles from "./LoginForm.module.css";
import { Button } from "../Button/Button";
import Link from "next/link";

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
          style={{ padding: "10px", width: "100%" }}
        />
        <Button
          title=""
          variant="social"
          imgPath="/ios.svg"
          socialButtonName="Apple"
          style={{ padding: "10px", width: "100%" }}
        />
      </div>
      <div className={styles.cardmain}>
        <form action="">
          <label htmlFor="email">Email address</label>
          <input type="email" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <a href="">Forgot password?</a>
          <Link href="/dashboard/uploads">
            <Button
              title="Sign in"
              variant="text"
              hoverColor="blue"
              backgroundColor="#605BFF"
              style={{ padding: "10px", width: "100%" }}
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
