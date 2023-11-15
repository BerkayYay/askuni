import React from "react";

const PageNumbers = ({ currentPage, totalPages, handleClick }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

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

    return pageNumbers;
  };

  return <>{renderPageNumbers()}</>;
};

export default PageNumbers;
