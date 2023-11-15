import React, { useState } from "react";
import Select from "./Select";
import Button from "../../Button";

const FilterComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedUniversityType, setSelectedUniversityType] = useState("");
  const [selectedGradeType, setSelectedGradeType] = useState("");
  const [selectedEducationType, setSelectedEducationType] = useState("");
  const [selectedCampusType, setSelectedCampusType] = useState("");
  const [selectedEducationLanguage, setSelectedEducationLanguage] =
    useState("");

  const options = [
    {
      label: "Country",
      options: [
        "Country 1",
        "Country 2",
        "Country 3",
        "Country 4",
        "Country 5",
      ],
      selectedText: selectedCountry,
      onSelectedOption: setSelectedCountry,
      placeholder: "Select Country",
    },
    {
      label: "University Type",
      options: ["Private", "State"],
      selectedText: selectedUniversityType,
      onSelectedOption: setSelectedUniversityType,
      placeholder: "Select University Type",
    },
    {
      label: "Grade Type",
      options: ["Associate", "Bachelors", "Masters", "PhD", "Other"],
      selectedText: selectedGradeType,
      onSelectedOption: setSelectedGradeType,
      placeholder: "Select Grade Type",
    },
    {
      label: "Education Type",
      options: ["Full time", "Evening period", "Online"],
      selectedText: selectedEducationType,
      onSelectedOption: setSelectedEducationType,
      placeholder: "Select Education Type",
    },
    {
      label: "Campus Type",
      options: ["On Campus", "Off Campus"],
      selectedText: selectedCampusType,
      onSelectedOption: setSelectedCampusType,
      placeholder: "Select Campus Type",
    },
    {
      label: "Education Language",
      options: ["Language 1", "Language 2", "Language 3"],
      selectedText: selectedEducationLanguage,
      onSelectedOption: setSelectedEducationLanguage,
      placeholder: "Select Education Language",
    },
  ];

  const clearFilters = () => {
    setSelectedCountry("");
    setSelectedUniversityType("");
    setSelectedGradeType("");
    setSelectedEducationType("");
    setSelectedCampusType("");
    setSelectedEducationLanguage("");
  };

  return (
    <div
      className="p-6 bg-white rounded-xl border-gray-300 border mb-11
      md:mb-0  w-full md:w-full lg:w-5/6 "
    >
      {options.map((option, index) => (
        <div className="mb-4" key={index}>
          <label className="block text-sm font-bold mb-2">{option.label}</label>
          <Select
            selectedText={option.selectedText || option.placeholder}
            options={option.options}
            onSelectedOption={option.onSelectedOption}
          />
        </div>
      ))}
      <div className="flex justify-center w-full">
        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>
    </div>
  );
};

export default FilterComponent;
