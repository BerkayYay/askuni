import React from "react";
import Button from "../../../Button";

const PageNumbers = ({ currentPage, totalPages, handleClick }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`
              ${
                currentPage === i
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-500"
              }
              border border-gray-300 rounded-full px-2 py-1
            `}
          >
            <button className="page-link" onClick={() => handleClick(i)}>
              {i}
            </button>
          </li>
        );
      }
    } else {
      const visiblePages = 3;
      const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
      const endPage = Math.min(totalPages, startPage + visiblePages - 1);

      if (startPage > 1) {
        pageNumbers.push(
          <li
            key={1}
            className="bg-white text-gray-500 border border-gray-300 rounded-full px-2 py-1"
          >
            <button className="page-link" onClick={() => handleClick(1)}>
              1
            </button>
          </li>
        );
        if (startPage > 2) {
          pageNumbers.push(
            <li key="ellipsis-start" className="text-gray-500 px-2 py-1">
              ...
            </li>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`
              ${
                currentPage === i
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-500"
              }
              border border-gray-300 rounded-full px-2 py-1
            `}
          >
            <button className="page-link" onClick={() => handleClick(i)}>
              {i}
            </button>
          </li>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(
            <li key="ellipsis-end" className="text-gray-500 px-2 py-1">
              ...
            </li>
          );
        }
        pageNumbers.push(
          <li
            key={totalPages}
            className="bg-white text-gray-500 border border-gray-300 rounded-full px-2 py-1"
          >
            <button
              className="page-link"
              onClick={() => handleClick(totalPages)}
            >
              {totalPages}
            </button>
          </li>
        );
      }
    }

    return pageNumbers;
  };

  return <>{renderPageNumbers()}</>;
};

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
