import React from "react";
import style from "./chip.module.css";

const SignCardChip = ({ title, color }) => {
	return (
		<span
			className={`
                group-hover:bg-white group-hover:text-primary text-white text-xs sm:text-base 
                ${style.btn} 
                ${`bg-[${color}]`}`}
		>
			{title || "Work"}
		</span>
	);
};

export default SignCardChip;
