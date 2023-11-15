import React from "react";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const headerItems = [
    "Universities",
    "About Us",
    "How To Apply?",
    "Partner",
    "Fairs",
    "Sign Up",
    "Translate",
  ];
  return (
    <div className="justify-evenly items-center flex p-4 bg-white sticky top-0 z-50">
      <div>
        <img
          src={
            "https://www.askuni.com/_next/image/?url=%2Fimages%2Faskuni.png&w=384&q=75"
          }
          alt="AskUni Logo"
          width={140}
        />
      </div>
      <div className="flex">
        {headerItems.map((headerItem) => (
          <HeaderItem headerItem={headerItem} key={headerItem} />
        ))}
      </div>
    </div>
  );
};

export default Header;
