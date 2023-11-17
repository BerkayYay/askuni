import React, { useState } from "react";
import FilterComponent from "../Filter/FilterComponent";
import { HiOutlineX } from "react-icons/hi";

const FilterModal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="z-20 xl:hidden">
      <button
        className="fixed p-2 text-white bg-blue-500 rounded-full bottom-4 right-4"
        onClick={toggleSidebar}
      >
        Open Filter
      </button>
      {isSidebarOpen && (
        <div className="fixed inset-0 flex ">
          <div className="w-1/3 p-6 bg-white">
            <div className="flex justify-end">
              <button className="p-2" onClick={toggleSidebar}>
                <HiOutlineX className="text-gray-600" />
              </button>
            </div>
            <FilterComponent />
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
