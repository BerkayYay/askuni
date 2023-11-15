import React from "react";
import Cards from "./UniCard/Cards";
import Filters from "./Filter/Filters";

const Body = () => {
  return (
    <div className="flex justify-center items-center mt-20 flex-col w-full">
      <text
        className="text-4xl font-bold text-gray-700"
        style={{ fontFamily: "Poppins" }}
      >
        Find Your Dream Programs
      </text>
      <div className="flex justify-evenly items-center mt-10 w-full">
        <Filters />
        <Cards />
      </div>
    </div>
  );
};

export default Body;
