"use client";
import React, { useState, useEffect } from "react";
import PageTemplate from "@/components/PageTemplate";
import Header from "@/components/Header";
import PlusIcon from "@/public/icons/header/plus.svg";
import SearchIcon from "@/public/icons/header/search.svg";
import ContactListCard from "@/components/ContactListCard";
import Button from "@/components/button";
import EditIcon from "@/public/edit-2.svg";

const profiles = [
	{
		profilePicture: "/images/emailSignUser.png",
		name: "Ayt reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "",
		name: "Aim Len",
		profession: "Marketing head at visio",
	},
	{
		profilePicture: "/images/emailSignUser.png",
		name: "oint reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "",
		name: "At reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "/images/emailSignUser.png",
		name: "Amy Len",
		profession: "Marketing head at visio",
	},
	{
		profilePicture: "/Ellipse.jpg",
		name: "Aon reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "/images/emailSignUser.png",
		name: "Ant reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "/Ellipse.jpg",
		name: "Aiy Len",
		profession: "Marketing head at visio",
	},
	{
		profilePicture: "",
		name: "Aot reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "/Ellipse.jpg",
		name: "Cnt reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "/Ellipse.jpg",
		name: "Bimy Len",
		profession: "Marketing head at visio",
	},
	{
		profilePicture: "/Ellipse.jpg",
		name: "Ont reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "",
		name: "Zont reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "/Ellipse.jpg",
		name: "Ian reni",
		profession: "Co-founder at visio",
	},
	{
		profilePicture: "/Ellipse.jpg",
		name: "xan reni",
		profession: "Co-founder at visio",
	},
];

const Contact = () => {
	const [contactData, setContactData] = useState([]);
	useEffect(() => {
		profiles.sort(function (a, b) {
			let c = a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
			return c;
		});
		const groupedObjects = {};
		for (const object of profiles) {
			const name = object.name;
			const startingLetter = name.charAt(0).toUpperCase();
			if (groupedObjects.hasOwnProperty(startingLetter)) {
				groupedObjects[startingLetter].push(object);
			} else {
				groupedObjects[startingLetter] = [object];
			}
		}
		setContactData(groupedObjects);
	}, []);
	useEffect(() => {}, [contactData]);

	return (
		<PageTemplate>
			<main>
				<Header
					title="Contacts / All contacts"
					rightSide={() => {
						return (
							<>
								<div className="flex gap-2 sm:gap-4 items-center text-xs sm:text-sm bg-primary text-white rounded-full sm:rounded-xl py-2 px-4 cursor-pointer">
									<span className="w-6 h-6">
										{/* plus svg */}
										<PlusIcon />
									</span>
									<span className="">Add card</span>
								</div>
								<div className="flex gap-6 items-center bg-secondary text-primary text-sm rounded-full lg:rounded-xl p-2 lg:py-2 lg:px-4 cursor-pointer">
									<span className="w-6 h-6">
										{/* search svg */}
										<SearchIcon />
									</span>
									<input
										className="bg-secondary hidden lg:block outline-none placeholder:text-primary min-w-[50px]"
										type="text"
										placeholder="Search cards"
									/>
								</div>
							</>
						);
					}}
				/>

				<section className="overflow-hidden px-8 sm:px-10">
					<div className="relative flex flex-col pb-10 h-[80vh] overflow-y-scroll noScrollbar">
						<div className="absolute top-6 right-0 z-20">
							<button className="mt-5 h-12 w-12 rounded-full flex justify-center items-center bg-card text-primary border-[1.5px] border-primary font-bold">
								<EditIcon />
							</button>
						</div>
						{Object.entries(contactData).map(function ([
							keyName,
							value,
						]) {
							return (
								<div
									key={keyName}
									className="flex flex-col gap-6"
								>
									<div className="bg-white sticky top-0 z-10 pb-2">
										<div className="mt-5 h-12 w-12 rounded-full flex justify-center items-center bg-card text-primary font-bold text-lg">
											{keyName}
										</div>
									</div>
									<div className="flex flex-col gap-4">
										{value.map((profile, index) => (
											<ContactListCard
												key={index}
												profilePicture={
													profile.profilePicture
												}
												name={profile.name}
												profession={profile.profession}
											/>
										))}
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</main>
		</PageTemplate>
	);
};

export default Contact;
