import React from "react";
import FilterComponent from "./FilterComponent";

const Filters = () => {
  return (
    <div className="flex flex-col justify-start items-start w-1/3">
      <text className="text-xl font-bold text-gray-500">Filters</text>
      <FilterComponent />
    </div>
  );
};

export default Filters;
