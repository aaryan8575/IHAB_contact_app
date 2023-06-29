"use client"
import SearchButton from "@/components/searchBar/SearchIconButton";
import SearchIcon from "../../../public/icons/search-normal.svg"
import React from "react";
import Checkbox from "@/components/checkBox";

const page = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <main className=" h-screen">
      {/* <DropDown variant="circle" borderColor="white" backgroundColor="black" /> */}

      <Checkbox
        options={options}
        variant="circle"
        borderColor="black"
        backgroundColor="blue"
        tickColor="white"
      />

      <SearchButton text="search" icon={SearchIcon}/> 
    </main>
  );
};

export default page;
