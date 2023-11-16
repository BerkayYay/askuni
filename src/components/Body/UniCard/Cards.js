import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchInput from "./components/SearchInput";
import Pagination from "./components/Pagination";
import { DataContext } from "../../../context/DataContext";
import { useContext } from "react";
import handleSearch from "../../../helpers/SearchHelpers";

const Cards = () => {
  const {
    universities,
    setUniversities,
    filteredUniversities,
    setFilteredUniversities,
    totalPages,
    universitiesPerPage,
    currentPage,
    setCurrentPage,
    setTotalPages,
  } = useContext(DataContext);

  const [currentUniversities, setCurrentUniversities] =
    useState(filteredUniversities);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    setCurrentUniversities(
      filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity)
    );
    setTotalPages(
      filteredUniversities.length > 0
        ? Math.ceil(filteredUniversities.length / universitiesPerPage)
        : 1
    );
  }, [currentPage, filteredUniversities]);

  return (
    <div className="flex justify-center items-start flex-col w-4/5">
      <SearchInput placeholder={"Search for programs"} />
      {currentUniversities.map((university, index) => (
        <Card key={index} university={university} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Cards;
