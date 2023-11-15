import React, { useState } from "react";
import Card from "./Card";
import Button from "../../Button";
import PageNumbers from "./components/Pagination";
const Cards = ({ universities }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const universitiesPerPage = 10;
  const totalPages = Math.ceil(universities.length / universitiesPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = universities.slice(
    indexOfFirstUniversity,
    indexOfLastUniversity
  );

  return (
    <div className="flex justify-center items-start flex-col w-4/5">
      {currentUniversities.map((university, index) => (
        <Card key={index} university={university} />
      ))}

      <div className="flex justify-center items-center mt-4 w-full">
        <Button
          onClick={() => handleClick(currentPage - 1)}
          className={`w-fit mr-2 ${
            currentPage === 1
              ? "cursor-not-allowed hover:bg-gray-400 bg-gray-400"
              : ""
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <ul className="flex justify-center items-center w-full py-2">
          <PageNumbers
            currentPage={currentPage}
            totalPages={totalPages}
            handleClick={handleClick}
          />
        </ul>
        <Button
          onClick={() => handleClick(currentPage + 1)}
          className={`w-fit ml-2 ${
            currentPage === totalPages
              ? "cursor-not-allowed hover:bg-gray-400 bg-gray-400"
              : ""
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Cards;
