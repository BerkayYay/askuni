import React, { useState, useRef, useEffect } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

const Select = ({ options, onSelectedOption, selectedText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef(null);

  const handleSelectedOption = (option) => {
    onSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <div
        className="flex justify-between items-center border border-gray-300 p-2 rounded-md cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="mr-2">{selectedText}</span>
        {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md w-full z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectedOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
