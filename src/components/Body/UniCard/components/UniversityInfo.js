import React from "react";
import RoundedText from "./RoundedText";
import { ReactComponent as LanguageIcon } from "../../../../assets/languageIcon.svg";
import { ReactComponent as GradeTypeIcon } from "../../../../assets/gradeTypeIcon.svg";
import { ReactComponent as EducationTimeIcon } from "../../../../assets/educationTimeIcon.svg";
import { ReactComponent as YearsIcon } from "../../../../assets/yearsIcon.svg";

const UniversityInfo = ({
  universityName,
  universityType,
  department,
  educationLanguage,
  years,
  educationType,
  gradeType,
}) => {
  const roundedObjects = [
    {
      text: educationLanguage,
      className: "mr-2 mb-2 text-customGreen border-customGreen",
      icon: <LanguageIcon className={"inline-block mr-1 text-customGreen"} />,
    },
    {
      text: years,
      className: "mr-2 mb-2 text-customOrange border-customOrange",
      icon: <YearsIcon className={"inline-block mr-1 text-customOrange"} />,
    },
    {
      text: educationType,
      className: "mr-2 mb-2 text-customBlue border-customBlue",
      icon: (
        <EducationTimeIcon className={"inline-block mr-1 text-customBlue"} />
      ),
    },
    {
      text: gradeType,
      className: "mr-2 mb-2 text-customPurple border-customPurple",
      icon: <GradeTypeIcon className={"inline-block mr-1 text-customPurple"} />,
    },
  ];

  return (
    <div className="w-1/2 p-4">
      <div className="text-lg font-sans mb-2 text-gray-600">
        {universityName} (GOLD)
      </div>
      <div className="text-gray-500 mb-4">{universityType} University</div>
      <div className="font-sans text-base mb-2">{department}</div>
      <div className="mt-2 flex flex-wrap text-15px justify-start items-center">
        {roundedObjects.map((object, index) => (
          <RoundedText
            key={index}
            text={object.text}
            className={object.className}
          >
            {object.icon}
          </RoundedText>
        ))}
      </div>
    </div>
  );
};

export default UniversityInfo;
