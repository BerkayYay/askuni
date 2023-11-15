import React from "react";

const HeaderItem = ({ headerItem }) => {
  return (
    <div className="flex">
      <ul className="text-gray-600 font-semibold flex-row flex justify-between items-center">
        <li
          className={`hover:text-blue-500 cursor-pointer mr-5 ${
            headerItem === "Sign Up" &&
            "border-2 border-blue-500 rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition duration-500 ease-in-out"
          }`}
        >
          {headerItem}
        </li>
      </ul>
    </div>
  );
};

export default HeaderItem;
