import React from "react";
import Image from "next/image";
// import clsx from "clsx";
// import styles from "./signup.module.css";

function Signup({ heading, title, content }) {
  return (
    <div className="grid grid-cols-2 h-screen ">
      <div className="bg-[#CDD4F7]  max-sm:hidden">
        <div className=" flex justify-center">
          <div className="">
            <div className="flex flex-col relative top-5 pl-16 pr-14 pt-7 pb-5">
              <Image
                src="/images/Leftvector.svg"
                alt="leftvector"
                width={65}
                height={65}
                className="absolute left-0 top-0 px-2"
              />
              <p className="text-primary text-opacity-50 font-bold text-[20px] mb-2">
                {heading}
              </p>
              <p className="text-primary text-3xl font-bold my-2 text-[35px]">
                {title}
              </p>
              <p className="text-primary text-opacity-50 my-2 font-bold text-[15px]">
                {content}
              </p>
              <Image
                src="/images/Leftvector.svg"
                alt="rightvector"
                width={50}
                height={50}
                className="absolute right-0 bottom-0 rotate-180 "
              />
            </div>
          </div>
        </div>

        <div className="flex w-[50%] justify-center bottom-0 absolute">
          <div className="relative px-14">
            <Image
              src="/images/Signup.svg"
              alt="signup"
              width={300}
              height={300}
              className=""
            />
            <Image
              src="/images/bluevector.svg"
              alt="vector1"
              width={70}
              height={70}
              className="absolute top-0 right-0 transform -rotate-5.82"
            />
          </div>
        </div>
      </div>
      <div className="bg-white"></div>
    </div>
  );
}

export default Signup;