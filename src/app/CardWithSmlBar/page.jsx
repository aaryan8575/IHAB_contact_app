import React from "react";
import Header from "@/components/Header";
import Grid from "@/components/Grid/Grid";
import PageTemplate from "@/components/PageTemplate";

const page = () => {
	return (
		<PageTemplate>
			<main>
				<Header title="cards" addBtn={true} searchBar={true} />
				<main className="gridwrapper">
                    <Grid name="Person 1" email="Person1@gmail.com" image={"/images/person1.png"} />
                    <Grid name="Person 2" email="Person2@gmail.com" image={"/images/person2.png"}/>
                    <Grid name="Person 3" email="Person3@gmail.com" image={"/images/person3.png"}/>
                    <Grid name="Person 4" email="Person4@gmail.com" image={"/images/person1.png"}/>
                    <Grid name="Person 5" email="Person5@gmail.com" image={"/images/person2.png"}/>
                </main>
		    </main>
		</PageTemplate>
	);
};

export default page;  