import React from "react";
import RoundedText from "./RoundedText";
import { ReactComponent as DollarIcon } from "../../../../assets/dollarIcon.svg";

const UniversityPrice = ({ price, term, deadline, season, startDate }) => {
  return (
    <div className="w-1/3 p-4">
      <div className="text-xl text-center text-customLightBlue font-bold mb-2">
        {price} EUR
      </div>

      <div className="w-full flex justify-center items-center text-15px">
        <RoundedText className="text-customGreen border-customGreen w-fit ">
          <DollarIcon className={"inline-block ml-1 text-customGreen"} />
          {term}
        </RoundedText>
      </div>

      <div className="border-t border-gray-300 mb-1"></div>
      <div
        className="text-center text-gray-500 text-16px"
        style={{ lineHeight: "1.5rem" }}
      >
        Deadline:
        <span className="ml-1 text-customRed">{deadline}</span>
      </div>

      <div
        className="text-center text-gray-500 text-16px "
        style={{ lineHeight: "1.5rem" }}
      >
        Season: {season}
      </div>
      <div
        className="text-center text-gray-500 text-16px "
        style={{ lineHeight: "1.5rem" }}
      >
        {startDate}
      </div>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-2xl w-full">
        Apply
      </button>
    </div>
  );
};

export default UniversityPrice;
