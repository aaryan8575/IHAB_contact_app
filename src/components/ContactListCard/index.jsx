import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import CircleCheckbox from "../checkBox/CircleCheckBox";

const ContactListCard = ({ profilePicture, name, profession, checkBox }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.infoContainer}>
				<div className={styles.imageWrapper}>
					{profilePicture ? (
						<Image
							src={profilePicture}
							alt={`${name}'s profile picture`}
							fill
						/>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1}
							stroke="currentColor"
							className="w-full h-full"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					)}
				</div>
				<div className={styles.infoWrapper}>
					<div>
						<p className={styles.name}>{name}</p>
					</div>
					<div>
						<p className={styles.profession}>{profession}</p>
					</div>
				</div>
			</div>
			<div className={styles.inputWrapper}>
				<div>
					<button className={styles.btn}>view</button>
				</div>
				{checkBox && (
					<div>
						<label className={styles.checkbox}>
							<input
								type="checkbox"
								className={styles.checkboxInput}
							/>
							<span className={styles.checkmark}></span>
						</label>
						{/* <CircleCheckbox /> */}
					</div>
				)}
			</div>
		</div>
	);
};

export default ContactListCard;
