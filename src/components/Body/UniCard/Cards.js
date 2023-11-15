import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchInput from "./components/SearchInput";
import Pagination from "./components/Pagination";

const Cards = ({ universities }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUniversities, setUniversities] = useState(universities);
  const [filteredUniversities, setFilteredUniversities] =
    useState(universities);
  const universitiesPerPage = 1;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(universities.length / universitiesPerPage)
  );

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (value) => {
    const filteredData = universities.filter((university) => {
      const lowerCaseValue = value.toLowerCase();
      return (
        university.universityName.toLowerCase().includes(lowerCaseValue) ||
        university.department.toLowerCase().includes(lowerCaseValue) ||
        university.educationLanguage.toLowerCase().includes(lowerCaseValue) ||
        university.universityType.toLowerCase().includes(lowerCaseValue)
      );
    });
    setFilteredUniversities(filteredData);
    setCurrentPage(1);
    setUniversities(filteredData.slice(0, universitiesPerPage));
    setTotalPages(
      filteredUniversities.length > 0
        ? Math.ceil(filteredUniversities.length / universitiesPerPage)
        : 1
    );
    value === "" &&
      setTotalPages(Math.ceil(universities.length / universitiesPerPage));
  };

  useEffect(() => {
    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    setUniversities(
      filteredUniversities.slice(indexOfFirstUniversity, indexOfLastUniversity)
    );
  }, [currentPage]);

  return (
    <div className="flex justify-center items-start flex-col w-4/5">
      <SearchInput
        placeholder={"Search for programs"}
        onChange={(value) => {
          handleSearch(value);
        }}
      />
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
