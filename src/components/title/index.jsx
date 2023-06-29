import React from "react";
import clsx from "clsx";
import styles from "./title.module.css";
import IsolationwhiteIcon from "../../../public/icons/isolationwhite.svg";
import IsolationwhiteIcon1 from "../../../public/icons/isolationwhite1.svg";

function Title({ title, heading, content, color }) {
  return (
    <div className={styles.main}> 
      <div className={styles.main_content}>
        <IsolationwhiteIcon className={styles.img1} />
        <p
          className={clsx(styles.heading, {
          [styles["heading--dark"]]: color === "dark",
          })}
        >
        {heading}
        </p>
        <p className={styles.title}>{title}</p>
        <p
          className={clsx(styles.content, {
          [styles["content--dark"]]: color === "dark",
          })}
        >
        {content}
        </p>
        <IsolationwhiteIcon1 className={styles.img2}/>
      </div>
    </div>
  );
}
export default Title;
