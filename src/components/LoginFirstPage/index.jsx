import React from "react";
import styles from "./loginfirstpage.module.css";
import TextComponent from "../inputcomponent";
import Button from "../button";
import FacebookIcon from "@/public/icons/facebook.svg";
import GoogleIcon from "@/public/icons/googleicon.svg";
import AppleIcon from "@/public/icons/appleicon.svg";

const LoginFirstPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.leftcontent}>
          <div className={styles.text}>
            <img
              className={styles.vector1}
              src="/images/whitelines1.png"
              alt=""
            />
            <p className=" text-[20px] md:text-[24px]">Login</p>
            <h1 className="text-[36px] md:text-[40px] mb-2 mt-2">
              Welcome back &#128075;
            </h1>
            <p className=" text-[14px] md:text-[18px]">
              Enter your Email and password to continue
            </p>
            <img
              className={styles.vector2}
              src="/images/whitelines2.png"
              alt=""
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              src="/images/bluelines1.png"
              alt=""
              className={styles.vector3}
            />
            <img
              src="/images/mobileImage.svg"
              alt="Logo"
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.contant}>
          <TextComponent label="Email" type="email" color="error" id="email" />
          <TextComponent label="Password" type="password" />

          <a className=" text-primary hover:text-blue-800 pr-[136px]" href="#">
            {" "}
            Forgot password?
          </a>
          <p className=" text-primary hover:text-blue-800 mt-10 mb-10">
            ━━━━━━━━<span className="px-3">or</span>━━━━━━━━
          </p>
          <a className=" text-blue-500 hover:text-blue-700" href="#">
            Login with Mobile no.
          </a>
          <br />
          <br />
          <button className={styles.button}>
            <Button title="" startIcon={GoogleIcon} color="icon" size="large" />
          </button>
          <button className={styles.button}>
            <Button
              title=""
              startIcon={FacebookIcon}
              color="icon"
              size="large"
            />
          </button>
          <button className={styles.button}>
            <Button title="" startIcon={AppleIcon} color="icon" size="large" />
          </button>
          <br />
          <div className={styles.buttons}>
            <div className={styles.accountDiv}>
              <span className={styles.span}>Don’t have an account?</span>{" "}
              <a href="#">Sign up </a>
            </div>
            <button className={styles.login}>Login</button>
            <br />
            <button className={styles.cancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFirstPage;
