import React from "react";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import EmailSignSnapCards from "@/components/EmailSignSnapCards";

const page = () => {
	return (
		<div className="sm:grid grid-cols-[20%_80%] min-h-screen max-w-screen">
			<NavBar />
			<main>
				<Header title="cards" addBtn={true} />
				<section className="overflow-hidden p-8 sm:p-10">
					<EmailSignSnapCards />
				</section>
			</main>
		</div>
	);
};

export default page;
