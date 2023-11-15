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

export default PageNumbers;
