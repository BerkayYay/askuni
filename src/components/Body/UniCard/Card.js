import React from "react";
import UniversityInfo from "./components/UniversityInfo";
import UniversityPrice from "./components/UniversityPrice";
import Divider from "../../Divider";

const Card = ({ university }) => {
  return (
    <div className="w-full h-220 bg-white border rounded-xl overflow-hidden shadow-md mb-4">
      <div className="flex">
        <div className="flex justify-center items-center ml-4">
          <img
            className="w-64 h-48 object-fit  rounded-2xl "
            src={university.image}
            alt="university"
          />
        </div>
        <UniversityInfo {...university} />
        <Divider direction="vertical" />
        <UniversityPrice
          price={university.price}
          term={university.term}
          deadline={university.deadline}
          season={university.season}
          startDate={university.startDate}
        />
      </div>
    </div>
  );
};

export default Card;
