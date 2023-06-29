import React from "react";
import style from "./priceheader.module.css";
import Typography from "../typography";
import Button from "../button";
import Hamburger from "../../../public/icons/header/hambar.svg";

const PriceHeader = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.leftcontainer}>
          <img src="images/logo.png" alt="logo" className="w-16 mr-6" />
          <Typography className="" variant="h4">
            ihab
          </Typography>
        </div>
        <div className={style.rightcontainer}>
          <div className={style.navlinks}>
            <ul className={style.navlinkslist}>
              <li className={style.navlinkitems}>
                <a href="">Home</a>
              </li>
              <li className={style.navlinkitems}>
                <a href="">Pricing</a>
              </li>
              <li className={style.navlinkitems}>
                <a href="">Download App</a>
              </li>
            </ul>
          </div>
          <div className={style.loginbutton}>
            <Button title="Login" color="outlined" />
          </div>
          <div className={style.hamburgermenu}>
            <Button title="" startIcon={Hamburger} color="icon" size="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceHeader;
