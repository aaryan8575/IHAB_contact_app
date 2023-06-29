"use client";
import React, { useState } from "react";
import Image from "next/image";
// import closeicon from "@/public/images/closeIcon.svg";
import Modal from "react-modal";
import clsx from "clsx";
import styles from "./card.module.css";


const buttondef = () => {
  return (
    <>
      <button className="bg-primary hover:bg-blue-700 text-background font-bold py-2 px-4 rounded-[15px] lg:text-2xl md:text-xl ">
        default button
      </button>
    </>
  );
};

// const defheader = "flex-1 text-center text-primary lg:text-3xl md:text-2xl sm:text-2xl font-bold"

function Card({ name, varient, header , children = buttondef() }) {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      borderRadius: "25px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>{name}</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        {/* <div className="flex justify-center h-screen w-screen card relative main"> */}
        <div className={customStyles}>
          <div className="bg-white  relative items-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-10 container">
              <div className="flex items-center">
              <h1 className={clsx(styles.header, {
        [styles["header"]]:header === "header",
        [styles["header--left"]]:header === "header--left",
      })}>{name}</h1>
                {/* {name && <h1 className={varient}>name</h1>} */}
                <button className={clsx(styles.closebtn, {
        [styles["closebtn--no"]]:varient === "closebtn--no",
        [styles["closebtn"]]:varient === "closebtn",
      })} onClick={() => setIsOpen(false)}>
                  <Image
                    src="/images/closeIcon.svg"
                    alt="closeicon"
                    width={25}
                    height={25}
                    className=""
                  />
                </button>
              </div>

              <div className="flex justify-center ">
                <input
                  className="flex  bg-white pl-5 p-2 rounded-[25px] input lg:h-16 lg:w-90 lg:text-xl justify-center items-center border-2 border-blue-400"
                  placeholder="Enter Your name"
                />
              </div>
              <div className="flex justify-center align-middle">{children}</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Card;
