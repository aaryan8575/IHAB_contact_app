"use client";
import React, { useState } from "react";
import style from "./colorpicker.module.css";

const ColorPicker = () => {
  const [color, changeColor] = useState("blue");
  function func(value) {
    console.log(value);
    let a = document.getElementById(value);
    changeColor(window.getComputedStyle(a).backgroundColor);
  }

  const data = [
    {
      color: "red",
      id: "btn1",
      style: style.div2,
      btn_style: style.button,
    },
    {
      color: "orange",
      id: "btn2",
      style: style.div2,
      btn_style: style.button,
    },
    {
      color: "yellow",
      id: "btn3",
      style: style.div2,
      btn_style: style.button,
    },
    {
      color: "green",
      id: "btn4",
      style: style.div2,
      btn_style: style.button,
    },
  ];
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.div0}>
          <button
            className={style.button0}
            onClick={() => {
              console.log("clicked");
              document.getElementById("change").focus();
            }}
          >
            <input
              className={style.input0}
              type="color"
              id="change"
              name="colorMain"
              value="#d3d3d3"
              onChange={() => {
                changeColor(document.getElementById("change").value);
              }}
            />
            <div className={style.image0}>
              <img src="/icons/plus.svg" alt="plus" />
            </div>
          </button>
        </div>

        <div id="b1" className={style.div1}>
          <button
            className={style.button1}
            style={{ backgroundColor: color }}
          ></button>
          <div className={style.image1}></div>
        </div>

        {data.map((value) => {
          return (
            <div className={value.style}>
              <button
                className={value.btn_style}
                style={{ backgroundColor: value.color }}
                id={value.id}
                onClick={() => func(value.id)}
              ></button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ColorPicker;
