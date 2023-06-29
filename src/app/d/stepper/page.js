import React from "react";
import MyComponent from "./stepper";
import { stepperData } from "../data";

const page = () => {
  return (
    <div>
      <MyComponent data={stepperData} />
    </div>
  );
};

export default page;
