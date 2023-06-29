import React from "react";
import Header from "@/components/Header";
import VerifyNumber from "@/components/VerifyNumber";
import PageTemplate from "@/components/PageTemplate";

const page = () => {
	return (
		<PageTemplate>
			<main>
				<Header title="cards" addBtn={true} />
				<section className="overflow-hidden p-8 sm:p-10">
					<VerifyNumber />
				</section>
			</main>
		</PageTemplate>
	);
};

export default page;
