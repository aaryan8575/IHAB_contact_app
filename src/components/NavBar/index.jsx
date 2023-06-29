import React from "react";
import NavLink from "@/components/NavLink";
import Logo from "@/public/images/logo.svg";
import UserIcon from "@/public/images/user.svg";
// importing icons for sidebar
import CardIcon from "@/public/icons/navbar/cards.svg";
import ContactIcon from "@/public/icons/navbar/contact.svg";
import EmailIcon from "@/public/icons/navbar/email.svg";
import SettingIcon from "@/public/icons/navbar/setting.svg";

import style from "./navBar.module.css";

const NavBarData = [
	{
		title: "Cards",
		link: "/cards",
		icon: <CardIcon />,
	},
	{
		title: "contacts",
		link: "/contacts",
		icon: <ContactIcon />,
	},
	{
		title: "email signature",
		link: "/emailsign",
		icon: <EmailIcon />,
	},
	{
		title: "settings",
		link: "/settings",
		icon: <SettingIcon />,
	},
];

const NavBar = () => {
	return (
		<div className={`${style.navBar} noScrollbar`}>
			<div className={style.logoWrapper}>
				<span className={style.logo}>
					<Logo />
				</span>
				<span className={style.logoText}>ihab</span>
			</div>
			<div className={style.navLinkWrapper}>
				{NavBarData.map((item) => {
					return <NavLink key={item.title} data={item} />;
				})}
			</div>
			<div className={style.btnWrapper}>
				{/* button */}
				<div className={style.userBtn}>
					<span className={style.btnIcon}>
						<UserIcon />
					</span>
					<span className={style.btnText}>Hey, John</span>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
