import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

function Button({ title, size, color, startIcon: StartIcon,endIcon:EndIcon}) {
  return (
    <button
      className={clsx(styles.btn, {
        [styles["btn--small"]]: size === "small",
        [styles["btn--large"]]: size === "large",
        [styles["btn--error"]]: color === "error", /*button having icon and error*/
        [styles["btn--outlined"]]: color === "outlined",/*button having border*/
        [styles["btn--text"]]: color === "text",/*button having  no border*/
        [styles["btn--contained"]]: color === "contained",/*button having no baground color*/
        [styles["btn--withdraw"]]: color === "withdraw",/*button having no background color and error*/
        [styles["btn--outlined2"]]: color === "outlined2",/*outlined and no background color*/
        [styles["btn--icon"]]: color === "icon",/*only icon button*/
        [styles["btn--subscribe"]]: color === "subscribe",/*subscribe button*/
        [styles["btn--using"]]: color === "using",/*using button*/
        [styles["btn--close"]]: color === "close",/*icon close*/
        [styles["btn--deleteCard"]]: color === "deleteCard"
      })}
    >
      {StartIcon && <StartIcon />}
      <span>
      {EndIcon && <EndIcon className="m-auto" />}
      {title && <span>{title}</span>}
      </span>
    </button>
  );
}
export default Button;
