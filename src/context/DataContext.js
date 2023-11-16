import React, { createContext, useEffect, useState } from "react";
import universityData from "../constants/dummyData.json";

const DataContext = createContext();

const DataContextProvider = (props) => {
  const [universities, setUniversities] = useState(universityData);
  const [currentPage, setCurrentPage] = useState(1);
  const [universitiesPerPage, setUniversitiesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(universities.length / universitiesPerPage)
  );

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedUniversityType, setSelectedUniversityType] = useState("");
  const [selectedGradeType, setSelectedGradeType] = useState("");
  const [selectedEducationType, setSelectedEducationType] = useState("");
  const [selectedCampusType, setSelectedCampusType] = useState("");
  const [selectedEducationLanguage, setSelectedEducationLanguage] =
    useState("");

  const [filteredUniversities, setFilteredUniversities] =
    useState(universityData);
  const [filterOptions, setFilterOptions] = useState([
    {
      label: "Country",
      options: ["Turkey", "Ukraine", "India"],
      selectedTexts: selectedCountry,
      onSelectedOption: setSelectedCountry,
      placeholder: "Select Country",
    },
    {
      label: "University Type",
      options: ["Private", "State"],
      selectedText: selectedUniversityType,
      onSelectedOption: (option) => {
        setSelectedUniversityType(option);
      },
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
      options: ["English", "Russian", "Turkish"],
      selectedText: selectedEducationLanguage,
      onSelectedOption: setSelectedEducationLanguage,
      placeholder: "Select Education Language",
    },
  ]);

  useEffect(() => {
    console.log(filterOptions.map((option) => option.selectedText));
  }, [filterOptions]);

  const clearFilters = () => {
    setSelectedCountry("");
    setSelectedUniversityType("");
    setSelectedGradeType("");
    setSelectedEducationType("");
    setSelectedCampusType("");
    setSelectedEducationLanguage("");
  };

  useEffect(() => {
    const filtered = universities.filter((university) => {
      return (
        (selectedCountry === "" || university.country === selectedCountry) &&
        (selectedUniversityType === "" ||
          university.universityType === selectedUniversityType) &&
        (selectedGradeType === "" ||
          university.gradeType === selectedGradeType) &&
        (selectedEducationType === "" ||
          university.educationType === selectedEducationType) &&
        (selectedCampusType === "" ||
          university.campusType === selectedCampusType) &&
        (selectedEducationLanguage === "" ||
          university.educationLanguage === selectedEducationLanguage)
      );
    });
    setFilteredUniversities(filtered);
  }, [
    selectedCountry,
    selectedUniversityType,
    selectedGradeType,
    selectedEducationType,
    selectedCampusType,
    selectedEducationLanguage,
  ]);

  return (
    <DataContext.Provider
      value={{
        universities,
        setUniversities,
        filteredUniversities,
        setFilteredUniversities,
        filterOptions,
        currentPage,
        setCurrentPage,
        universitiesPerPage,
        setUniversitiesPerPage,
        totalPages,
        setTotalPages,
        filterOptions,
        setFilterOptions,
        clearFilters,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, DataContext };
