import React from "react";
import style from "./phonenumber.module.css";

const Phonenumber = ({ options }) => {
  return (
    <div className={`${style.phone}`}>
      <div className={`${style.countrycode}`}>
        <select className={`${style.code}`}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className={`${style.number}`}>
        <input
          placeholder="Mobile number"
          type="tel"
          maxLength={10}
          className={`${style.code}`}
        />
      </div>
    </div>
  );
};

export default Phonenumber;

