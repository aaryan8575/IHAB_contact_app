import React from 'react'
import style from "./phonenumber.module.css"
const Phonenumber = ({ options }) => {
  return (
    <div className={style.phone}>
      <div className={style.countrycode} >
        <span className={style.plus}>+</span>
        <select className={style.code}>
        {options.map((option, phonenumber) => (
        <option key={phonenumber} value={option}>{option}</option>
      ))}
        </select>

      </div>
      <div className={style.number}>
        <input placeholder="Mobile number" input type="text" maxlength="10"  title="Please enter exactly 10 digits"  className= {style.code1}/>

      </div>
    </div>

   

  );
};
export default Phonenumber;
