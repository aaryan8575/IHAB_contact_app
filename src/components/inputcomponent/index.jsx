"use client";
import React from "react";
import styles from "./inputcomponent.module.css";
import clsx from "clsx";
const TextComponent = ({
  label = "Enter valid label",
  type = "text",
  width = "full",
  required = false,
  color,
  id,
}) => {
  // required
  const labelContent = required ? "after:content-['*']" : "";
  const checkEmail = type === "email" ? "peer" : "";
  // password
  const handleToggleVisibility = () => {
    const input = document.getElementById(label);
    input.type = input.type === "password" ? "text" : "password";
    var image = document.getElementById("myImage");
    var currentSrc = image.src;
  };
  return (
    <form action="submit" name="form1">
      <div
        className={clsx(styles.txt_field, {
          [styles["txt_field--small"]]: width === "small",
          [styles["txt_field--medium"]]: width === "medium",
          [styles["txt_field--large"]]: width === "large",
        })}
      >
        <input
          className={`${styles.input} peer`}
          id={label}
          type={type}
          placeholder=" "
          required="true"
          name="inp"
        />
        {type === "password" && (
          <button
            type="button"
            className={styles.eyeIcon}
            onClick={handleToggleVisibility}
            aria-label="Toggle Password Visibility"
          >
            <img
              id="myImage"
              src="/icons/eye.svg"
              alt="Toggle Password Visibility"
            />
          </button>
        )}
        <label className={`${labelContent}`}>{label}</label>
        {type === "email" && (
          <p className="mt-2 ml-2 hidden peer-valid:peer-focus:hidden peer-focus:block peer-invalid:peer-:not(:focus):block text-red text-sm">
            Please Enter Valid Email
          </p>
        )}
      </div>
    </form>
  );
};

export default TextComponent;
