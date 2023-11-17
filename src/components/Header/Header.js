import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import { HiMenu, HiOutlineX } from "react-icons/hi";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10 bg-white ">
      <div className="container relative flex items-center justify-between p-4 mx-auto">
        <div>
          <img
            src="https://www.askuni.com/_next/image/?url=%2Fimages%2Faskuni.png&w=384&q=75"
            alt="AskUni Logo"
            width={140}
          />
        </div>
        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <HiOutlineX className="text-2xl transition-transform duration-300 transform rotate-180" />
            ) : (
              <HiMenu className="text-2xl transition-transform duration-300" />
            )}
          </button>
        </div>
        {/* Regular Menu Items */}
        <div className="hidden lg:flex">
          {headerItems.map((headerItem) => (
            <HeaderItem headerItem={headerItem} key={headerItem} />
          ))}
        </div>

        {isMenuOpen && (
          <>
            {/* Semi-Transparent Overlay */}
            <div
              className="fixed top-0 left-0 w-screen h-screen transition-opacity duration-300 bg-black opacity-30"
              onClick={toggleMenu}
            ></div>

            <div
              className="fixed top-0 right-0 w-64 h-screen transition-transform duration-300 bg-white shadow-lg"
              style={{
                transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              {/* Close Button */}
              <button
                className="absolute text-xl transition-transform duration-300 transform cursor-pointer top-4 right-4 hover:rotate-180"
                onClick={toggleMenu}
              >
                <HiOutlineX />
              </button>
              {/* Sidebar Content */}
              <div className="flex flex-col items-center w-full p-4 bg-white lg:hidden justify-evenly h-1/2">
                {headerItems.map((headerItem) => (
                  <HeaderItem headerItem={headerItem} key={headerItem} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
