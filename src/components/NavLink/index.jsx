import React from "react";
import style from "./navLinkBtn.module.css";
import Link from "next/link";

const NavLink = ({ data }) => {
	return (
		<Link
			href={data?.link || ""}
			aria-label={`link for ${data?.link} page`}
		>
			<div className={`${style.navLinkBtn}`}>
				<span className={`${style.navIcon}`}>{data?.icon || "#"}</span>
				<span className={`${style.linkTitle}`}>
					{data?.title || ""}
				</span>
			</div>
		</Link>
	);
};

export default NavLink;
