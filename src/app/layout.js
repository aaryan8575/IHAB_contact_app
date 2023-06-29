import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Roboto_Slab } from "next/font/google";

const roboto = Roboto_Slab({
	weight: ["400", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});

const jakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "700"],
	variable: "--font-jakarta",
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} ${jakarta.variable}`}>
				{children}
			</body>
		</html>
	);
}