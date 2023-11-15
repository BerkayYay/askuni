import React from "react";
import Button from "../../../Button";
import PageNumbers from "./PageNumbers";

const Pagination = ({ currentPage, totalPages, handleClick }) => {
  return (
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
  );
};

export default Pagination;
