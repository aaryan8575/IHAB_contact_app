import React from "react";
import NavBar from "@/components/NavBar";
import style from "./page.module.css";

const PageTemplate = ({ children }) => {
	return (
		<div
			className={`sm:grid grid-cols-[20%_80%] min-h-screen max-w-screen`}
		>
			<NavBar />
			<main>{children}</main>
		</div>
	);
};

export default PageTemplate;
