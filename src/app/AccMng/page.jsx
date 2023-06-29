import React from "react";
import Header from "@/components/Header";
import PageTemplate from "@/components/PageTemplate";
import ProfileCard from "@/components/Account";
import Button from "@/components/button";

const profiles = [
    {
      name: 'change name',
      profession: 'John Ryan',
    },
    {
      name: 'change email address',
      profession: 'johnryan@gmail.com',
    },
    {
      name: 'change phone number',
      profession: '+911234567890',
    },
  ];
const page = () => {
	return (
		<PageTemplate>
			<main>
				<Header title="Settings/Account"/>
				<section className="overflow-hidden p-8 sm:p-10 font-mono">
				{profiles.map((profile, index) => (<ProfileCard  key={index} name={profile.name} profession={profile.profession}
        />
      ))}
				</section>
        <div className="flex pl-10 gap-2">
          <Button title="Reset Password" color="text1" size="large"/>
          <Button title="Delete Account" color="error" size="large" className="!rounded-3xl"/>
        </div>
        </main>
		</PageTemplate>
	);
};

export default page;
