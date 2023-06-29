import React from "react";
import SignSnapCard from "@/components/SignSnapCard";
import user1 from "@/public/images/emailSignUser.png";
import user2 from "@/public/images/user.png";
import styles from "./style.module.css";

const data = [
	{
		name: "John ryan 1",
		email: "johnryan@gmail.com",
		chipName: "work",
		image: user1,
		// style: "border-[#4CD2DB] bg-[#4CD2DB]",
		color: "#4CD2DB",
	},
	{
		name: "John ryan 2",
		email: "johnryan@gmail.com",
		chipName: "personal",
		image: user2,
		// style: "border-[#59ACF3] bg-[#59ACF3]",
		color: "#59ACF3",
	},
	{
		name: "John ryan 3",
		email: "johnryan@gmail.com",
		chipName: "Personal",
		image: user1,
		// style: "border-[#4CD2DB] bg-[#4CD2DB]",
		color: "#4CD2DB",
	},
	{
		name: "John ryan 4",
		email: "johnryan@gmail.com",
		chipName: "work",
		image: user2,
		// style: "border-[#59ACF3] bg-[#59ACF3]",
		color: "#59ACF3",
	},
	{
		name: "John ryan 5",
		email: "johnryan@gmail.com",
		chipName: "work",
		image: user1,
		// style: "border-[#4CD2DB] bg-[#4CD2DB]",
		color: "#4CD2DB",
	},
	{
		name: "John ryan 6",
		email: "johnryan@gmail.com",
		chipName: "work",
		image: user2,
		// style: "border-[#59ACF3] bg-[#59ACF3]",
		color: "#59ACF3",
	},
];

const EmailSignSnapCards = () => {
	return (
		<div
			className={`${styles.noScrollbar} max-w-full snap-x flex gap-6 bg-emailSignBgColor p-6 overflow-scroll rounded-2xl `}
		>
			{data?.map((item, index) => {
				return <SignSnapCard key={index} data={item} />;
			})}
		</div>
	);
};

export default EmailSignSnapCards;
