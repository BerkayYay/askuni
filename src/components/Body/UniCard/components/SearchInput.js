import React from "react";
import { ReactComponent as SearchIcon } from "../../../../assets/searchIcon.svg";

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <div
      className="relative flex 
        justify-center items-center w-full mb-4
    "
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={
          onChange
            ? (e) => {
                onChange(e.target.value);
              }
            : null
        }
        className="py-2 px-4 w-full border border-gray-300 rounded-md"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
