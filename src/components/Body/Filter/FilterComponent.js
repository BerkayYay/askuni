import React, { useState, useContext } from "react";
import Select from "./Select";
import Button from "../../Button";
import { DataContext } from "../../../context/DataContext";

const FilterComponent = () => {
  const { filterOptions, clearFilters } = useContext(DataContext);

  return (
    <div className=" p-6 bg-white rounded-xl border-gray-300 border mb-11 md:mb-0  w-full md:w-full lg:w-6/6 ">
      {filterOptions.map((option, index) => (
        <div className="mb-4 " key={index}>
          <label className="block text-sm font-bold mb-2">{option.label}</label>
          <Select
            id={option.id}
            selectedText={option.placeholder}
            options={option.options}
            onSelectedOption={option.onSelectedOption}
            setFunction={option.setFunction}
            index={index}
          />
        </div>
      ))}
      <div className="flex justify-center w-full">
        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>
    </div>
  );
};

export default FilterComponent;
