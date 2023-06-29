import React from "react";
import SearchIcon from "@/public/icons/header/search.svg";
import PlusIcon from "@/public/icons/header/plus.svg";
import HamIcon from "@/public/icons/header/hambar.svg";

const Header = ({ title, rightSide: Buttons }) => {
  const splitTitle = title.split("/");
  return (
    <header className={style.headerContainer}>
      <div className={style.headerLeftSide}>
        <div className={style.hamIcon}>
          <span className="w-6 h-6">
            <HamIcon />
          </span>
        </div>
        <div>
          <span className={style.title}>
            <span className="flex gap-2">
              {splitTitle.slice(0, -1) ? (
                <>
                  <span>
                    {splitTitle.slice(0, -1).join("/")}
                  </span>
                  <span className="hidden sm:block ">/</span>
                </>
              ) : (
                <></>
              )}
            </span>
            <span className="hidden sm:block text-primary">
              {splitTitle.slice(-1)}
            </span>
          </span>
        </div>
      </div>
      {Buttons && <div className={style.btnContainer}>
        <Buttons />
      </div>}
    </header>
  );
};

export default Header;
