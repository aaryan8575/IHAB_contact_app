"use client";
import React, { useState } from "react";
import SearchIcon from "../../../public/icons/search_icon.svg";
import SearchBar from "../../../src/components/searchBar/SearchBar";

const SearchButton = ({ text, icon: SearchIcon }) => {
  const [showMyModal, setshowMyModal] = useState(false);

  const handleOnClose = () => setshowMyModal(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="sm:hidden p-2">
          <button
            onClick={() => setshowMyModal(true)}
            type="button"
            className="flex  items-center justify-center text-sm leading-6  bg-card rounded-full  shadow-sm py-1.5 pl-2 pr-3 h-11 w-11"
          >
            {/* <SearchIcon /> */}
            {SearchIcon && <span><SearchIcon /></span>}
          </button>
        </div>

        <div className="hidden sm:flex items-center">
          <button
            onClick={() => setshowMyModal(true)}
            type="button"
            className="flex  items-center text-sm leading-6  bg-card rounded-[20px]   shadow-sm py-1.5 pl-2 pr-7"
          >
            <SearchIcon />
            <span className="pl-5 flex items-start text-base font-semibold text-primary ">
              {text}
            </span>
          </button>
        </div>
      </div>
      <SearchBar onClose={handleOnClose} visible={showMyModal} />
    </>
  );
};

export default SearchButton;
