import React from "react";
import SearchIcon from "../../../public/icons/search_icon.svg";

const SearchBar = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleOnClose}
      id="container"
      className="fixed  z-50 inset-0 bg-opacity-30 backdrop-blur-sm items-center flex justify-center h-5/6 w-full "
    >
      <div className="relative  h-[60%] w-[60%] rounded-xl bg-background">
        <div className="rounded shadow-lg z-1 w-full  flex">
          <input
            type="text"
            className=" px-4 py-2 pl-10 w-[100%]   bg-card rounded-t-xl focus:outline-none "
            placeholder="Search"
          />
          <SearchIcon className="w-6 h-6 fill-primary absolute top-2 left-2 " />
        </div>
        <div className="h-[89%] w-full rounded-b-xl bg-card gap-4 shadow-md overflow-auto   flex flex-col px-4 noScrollbar">
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
          <div className="border-b-2 border-primary border-opacity-20">01</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
