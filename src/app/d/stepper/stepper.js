import React from "react";
import style from "./stepui.module.css";

const StepList = () => {
  return (
    <div className={style.pointbg}>
      {data.map((step, index) => (
        <div className={style.points} key={index}></div>
      ))}
    </div>
  );
};

export default function MyComponent({ data }) {
  return (
    <div className=" bg-card">
      <div className=" flex">
        {/* <StepList /> */}
        <div className={`${style.stepContainer} ml-1`}>
          {data.map((step, index) => (
            <div className={`${style.stepperItem} m-5`} key={index}>
              <h3 className={style.hh3}>{step.label}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
