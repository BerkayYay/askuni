import React from "react";
import FilterComponent from "./FilterComponent";

const Filters = () => {
  return (
    <div className="hidden xl:flex flex-col justify-center items-start xl:w-1/3 ">
      <div className="hidden xl:block">
        <FilterComponent />
      </div>
    </div>
  );
};

export default Filters;
