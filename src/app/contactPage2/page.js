"use client";
import React, { useState, useEffect } from "react";
import ContactListCard from "@/components/ContactListCard";
import PageTemplate from "@/components/PageTemplate";
import Button from "../../components/button/index.jsx";
import PlusIcon from "../../../public/icons/plusicon.svg";
import SearchButton from "../../components/searchBar/SearchIconButton.jsx";
import SearchIcon from "../../../public/icons/search-normal.svg";
// import ProfileCard from "../../app/e/contact/ProfileCard.jsx";
import EditIcon from "../../../public/icons/editIcon.svg";
import ArrowLeft from "../../../public/icons/arrow-left.svg";
const profiles = [
  { profilePicture: "/images/emailSignUser.png", name: "Ayt reni", profession: "Co-founder at visio", },
  { profilePicture: "/images/emailSignUser.png", name: "oint reni", profession: "Co-founder at visio", },
  { profilePicture: "/Ellipse.jpg", name: "Aiy Len", profession: "Marketing head at visio", },
  { profilePicture: "", name: "Aot reni", profession: "Co-founder at visio", },
  { profilePicture: "/Ellipse.jpg", name: "Cnt reni", profession: "Co-founder at visio", },
  { profilePicture: "/Ellipse.jpg", name: "Bimy Len", profession: "Marketing head at visio", },
  { profilePicture: "/Ellipse.jpg", name: "Ont reni", profession: "Co-founder at visio", },
  { profilePicture: "", name: "Zont reni", profession: "Co-founder at visio", },
  { profilePicture: "/Ellipse.jpg", name: "Ian reni", profession: "Co-founder at visio",},
  {profilePicture: "/Ellipse.jpg", name: "xan reni", profession: "Co-founder at visio",},
  { profilePicture: "/Ellipse.jpg", name: "dj", profession: "Co-founder at visio",},
  {profilePicture: "/Ellipse.jpg", name: "dev", profession: "Co-founder at visio",},
];
// export default function hello() {
const Contact = () => {
  const [contactData, setContactData] = useState([]);
  useEffect(() => {
    profiles.sort(function (a, b) {
      let c = a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      return c;
    });
    const groupedObjects = {};
    for (const object of profiles) {
      const name = object.name;
      const startingLetter = name.charAt(0).toUpperCase();
      if (groupedObjects.hasOwnProperty(startingLetter)) {
        groupedObjects[startingLetter].push(object);
      } else {
        groupedObjects[startingLetter] = [object];
      }
    }
    setContactData(groupedObjects);
  }, []);


  useEffect(() => {}, [contactData]);
  return (
    <div className="">
      <PageTemplate>
        <main>
          <header className="">
			{/* mobile header */}
            <div className="sm:hidden sm:flex  flex flex-row mt-5 justify-between px-5">
              <div className="flex items-center">
                <Button startIcon={ArrowLeft} size="large" color="text1" />
              <a href="#" className="text-2xl text-primary">
                recents
              </a>
              </div>
              <div className="flex">
                <Button title="contact" startIcon={PlusIcon} color="icon" size="small"/>
                <SearchButton text="Search contacts" icon={SearchIcon}/>
              </div>
            </div>
			{/* web header  */}
            <div className="flex flex-row justify-between px-8 max-sm:hidden">
              <div className="">
                <p className="font-bold p-5 text-3xl">
                  <a href="#" className="text-textGray">Contacts</a>/
                  <a href="#" className="text-primary">All Contacts</a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button title="Create contact"startIcon={PlusIcon}size="large"/>
                <SearchButton text="Search contacts" icon={SearchIcon} />
              </div>
            </div>
          </header>

          <section className="overflow-hidden px-8 sm:px-10">
            <div className="relative flex flex-col pb-10 h-screen overflow-y-scroll">
              <div className="absolute top-6 right-0 z-20 pr-2">
                <Button startIcon={EditIcon} size="large" color="text1" />
              </div>
              {Object.entries(contactData).map(function ([keyName, value]) {
                return (
                  <div key={keyName} className="flex flex-col gap-6">
                    <div className="bg-white sticky top-0 z-10 pb-2">
                      <div className="mt-5 h-12 w-12 rounded-full flex justify-center items-center bg-card text-primary font-bold text-lg">
                        {keyName}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      {value.map((profile, index) => (
                        <ContactListCard key={index} profilePicture={profile.profilePicture} name={profile.name} profession={profile.profession}/>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </PageTemplate>
    </div>
  );
};
export default Contact;
