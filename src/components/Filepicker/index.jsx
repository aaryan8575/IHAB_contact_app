"use client";
import React from "react";
import { useRef, useState } from "react";
import styles from "./filepicker.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function Filepicker(props) {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  };

  return (
    <form className={styles.form}>
      <div
        className={clsx(
          "rounded-[26px] flex items-center justify-center shrink-0 h-[150px] w-[150px]",
          {
            [props.logoContainer]: !!props.logoContainer,
          }
        )}
        onClick={handleImageClick}
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(image)}
            alt="upload image"
            className={styles.image}
            fill
          />
        ) : (
          <img
            src="/images/logo.png"
            alt="upload image"
            className={styles.logo}
          />
        )}
      </div>
      <label>
        <div
          className={`h-[55.63px] w-[210px] rounded-[37.5497px] flex flex-row items-center justify-center ${props.chooseFileContainer}`}
        >
          <img
            src="./images/pencil_icon.svg"
            alt="svg image"
            className={styles.icon}
          />
          <p className={props.paragraph}>{props.text}</p>
        </div>

        <input
          type="file"
          id="actual-btn"
          ref={inputRef}
          onChange={handleImageChange}
          // style={{display:"none"}}
          className={styles.btn}
        />
      </label>
    </form>
  );
}

Filepicker.defaultProps = {
  logoContainer: `${styles.logoContainer}`,
  image: `${styles.image}`,
  logo: `${styles.logo}`,
  icon: `${styles.icon}`,
  paragraph: `${styles.paragraph}`,
  form: `${styles.form}`,
  chooseFileContainer: `${styles.chooseFileContainer}`,
  title: `Choose File`,
};
