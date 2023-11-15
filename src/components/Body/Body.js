import React from "react";
import Cards from "./UniCard/Cards";
import Filters from "./Filter/Filters";
import dummyData from "../../constants/dummyData.json";

const Body = () => {
  return (
    <div className="flex justify-center items-center mt-20 flex-col w-full">
      <text
        className="text-4xl font-bold text-gray-700"
        style={{ fontFamily: "Poppins" }}
      >
        Find Your Dream Programs
      </text>
      <div className="flex justify-between items-center mt-10 w-2/3">
        <text className="text-xl font-bold text-gray-500 mb-4">Filters</text>
        <span>We found {dummyData.length} programs for you</span>
        <span>Low to High</span>
      </div>
      <div className="flex justify-center items-start mt-10 w-2/3 ">
        <Filters />
        <Cards universities={dummyData} />
      </div>
    </div>
  );
};

export default Body;
