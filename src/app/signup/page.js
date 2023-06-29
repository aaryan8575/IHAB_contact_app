import React from "react";
import Image from "next/image";
import Title from "../../components/title/index.jsx";
import Button from "../../components/button/index.jsx";
import TextComponent from "../../components/inputcomponent/index.jsx";
import CircleCheckbox from "../../components/checkBox/CircleCheckBox.jsx";
import Index from "../../components/mobilecomponents/index.jsx";
// import clsx from "clsx";
// import styles from "./signup.module.css";

function Signup() {
    const options = [
        { label: "I accept the terms & conditons", value: "option1" },];
    const data=[91,1,49,61]
  return (
    <div className="grid sm:grid-cols-2 h-screen">
      <div className="bg-[#CDD4F7]  max-sm:hidden flex justify-center">
      <Title heading="Sign up" title="Welcome to ihab 👋" content="create your account to make your first business card." color="dark"/>
        <div className="flex w-[50%] justify-center bottom-0 absolute">
          <div className="relative px-14">
            <Image
              src="/icons/signupimg.svg"
              alt="signup"
              width={300}
              height={300}
              className=""
            />
            <Image
              src="/icons/blue_vector.svg"
              alt="vector1"
              width={70}
              height={70}
              className="absolute top-0 right-0 transform -rotate-5.82"
            />
          </div>
        </div>
      </div>
      {/* right part */}
      <div className=" flex  justify-center items-center">
        <div className="flex  flex-col w-2/3 max-sm:w-11/12">
            <div className="max-sm:block hidden">
            <Title heading="Sign up" title="Welcome to ihab 👋" content="create your account to make your first business card."/>
            </div>
            <TextComponent type="text" label="First name"/>
            <TextComponent type="text" label="Last name"/>
            <TextComponent type="text" label="Email address"/>
            <TextComponent type="password" label="Password"/>
            <TextComponent type="password" label="Confirm Password"/>
            <Index options={data}/>            
            <CircleCheckbox options={options} variant="square" borderColor="black" backgroundColor="blue" tickColor="white"/>
            <div className="flex justify-center mt-10">
                <p>Already have an account?<a href="#" className="text-primary font-bold">Login</a></p>
            </div>
            <div className="flex justify-center m-2">
                <Button title="Send me OTP" size="large" />
            </div>
            <div className=" flex justify-center m-2">
                <Button title="Cancel" color="withdraw" size="large"/>
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Signup;