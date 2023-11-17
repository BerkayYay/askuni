import React, { useContext } from "react";
import Cards from "./UniCard/Cards";
import Filters from "./Filter/Filters";
import dummyData from "../../constants/dummyData.json";
import Select from "./Filter/Select";
import { DataContext } from "../../context/DataContext";
import FilterModal from "./FilterModal/FilterModal";

const Body = () => {
  const { sortOptions } = useContext(DataContext);
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
        <p className="text-gray-500 text-16px">Low to High</p>
      </div>
      <div className="flex justify-center items-start mt-10 w-2/3 ">
        <Filters />
        <FilterModal />
        <Cards />
      </div>
    </div>
  );
};

export default Body;
