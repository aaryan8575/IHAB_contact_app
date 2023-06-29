import React from "react";
import clsx from "clsx";
import style from "./typography.module.css";

const Typography = ({
	variant = "body1",
	font = "font-jakarta",
	className,
	component = "p",
	children,
}) => {
	const v = ["h1", "h2", "h3", "h4", "h5", "h6"];
	const Component = v.includes(variant) ? variant : component;
	return (
		<Component
			className={clsx(style[variant], {
				[className]: !!className,
				[font]: !!font,
			})}
		>
			{children}
		</Component>
	);
};

export default Typography;
