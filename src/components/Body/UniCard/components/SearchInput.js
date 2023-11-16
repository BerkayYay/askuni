import React from "react";
import { ReactComponent as SearchIcon } from "../../../../assets/searchIcon.svg";
import { handleSearch } from "../../../../helpers/SearchHelpers";
import { useContext } from "react";
import { DataContext } from "../../../../context/DataContext";

const SearchInput = ({ placeholder }) => {
  const {
    universities,
    setFilteredUniversities,
    setCurrentPage,
    setUniversities,
    setTotalPages,
    universitiesPerPage,
    filteredUniversities,
  } = useContext(DataContext);
  return (
    <div className="relative flex justify-center items-center w-full mb-4">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) =>
          handleSearch({
            value: e.target.value,
            universities,
            setFilteredUniversities,
            setCurrentPage,
            setUniversities,
            setTotalPages,
            universitiesPerPage,
            filteredUniversities,
          })
        }
        className="py-2 px-4 w-full border border-gray-300 rounded-xl"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
