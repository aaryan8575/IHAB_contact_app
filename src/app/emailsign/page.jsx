import React from "react";
import Header from "@/components/Header";
import EmailSignSnapCards from "@/components/EmailSignSnapCards";
import PageTemplate from "@/components/PageTemplate";

const page = () => {
	return (
		<PageTemplate>
			<main>
				<Header title="cards" addBtn={true} />
				<section className="overflow-hidden p-8 sm:p-10">
					<EmailSignSnapCards />
				</section>
			</main>
		</PageTemplate>
	);
};

export default page;
