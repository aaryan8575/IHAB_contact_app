import Image from "next/image";
import React from "react";
import user from "@/public/images/emailSignUser.png";
import style from "./snapCard.module.css";
import SignCardChip from "../SignCardChip";

const index = ({ data }) => {
	return (
		<div
			className={`group 
			${style.snapCard} 
			${`bg-[${data.color}]`} 
			${`border-[${data.color}]`}`}
		>
			<div className={style.imgWrapper}>
				<Image src={data?.image || user} alt="user image" fill />
			</div>
			<div className={style.infoWrapper}>
				<span className={`${style.userName} capitalize`}>
					{data?.name || "John ryan"}
				</span>
				<span className={style.userEmail}>
					{data?.email || "johnryan@gmail.com"}
				</span>
			</div>
			<div className="">
				{/* <button
					className={`
					group-hover:bg-white group-hover:text-primary text-white 
					${style.btn} 
					${`bg-[${data.color}]`}`}
				>
					{data?.chipName || "Work"}
				</button> */}
				<SignCardChip title={data?.chipName} color={data?.color} />
			</div>
		</div>
	);
};

export default index;
