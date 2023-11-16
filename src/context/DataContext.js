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
  const [filteredUniversities, setFilteredUniversities] =
    useState(universityData);

  const [selectedFilters, setSelectedFilters] = useState({
    country: [],
    universityType: [],
    gradeType: [],
    educationType: [],
    campusType: [],
    educationLanguage: [],
  });

  const [filterOptions, setFilterOptions] = useState([
    {
      id: "country",
      label: "Country",
      options: ["Turkey", "Ukraine", "India"],
      selectedText: selectedFilters.country,
      onSelectedOption: (option) => handleSelectedOption("country", option),
      placeholder: "Select Country",
    },
    {
      id: "universityType",
      label: "University Type",
      options: ["Private", "State"],
      selectedText: selectedFilters.universityType,
      onSelectedOption: (option) =>
        handleSelectedOption("universityType", option),
      placeholder: "Select University Type",
    },
    {
      id: "gradeType",
      label: "Grade Type",
      options: ["Associate", "Bachelors", "Masters", "PhD", "Other"],
      selectedText: selectedFilters.gradeType,
      onSelectedOption: (option) => handleSelectedOption("gradeType", option),
      placeholder: "Select Grade Type",
    },
    {
      id: "educationType",
      label: "Education Type",
      options: ["Full time", "Evening period", "Online"],
      selectedText: selectedFilters.educationType,
      onSelectedOption: (option) =>
        handleSelectedOption("educationType", option),
      placeholder: "Select Education Type",
    },
    {
      id: "campusType",
      label: "Campus Type",
      options: ["On Campus", "Off Campus"],
      selectedText: selectedFilters.campusType,
      onSelectedOption: (option) => handleSelectedOption("campusType", option),
      placeholder: "Select Campus Type",
    },
    {
      id: "educationLanguage",
      label: "Education Language",
      options: ["English", "Russian", "Turkish"],
      selectedText: selectedFilters.educationLanguage,
      onSelectedOption: (option) =>
        handleSelectedOption("educationLanguage", option),
      placeholder: "Select Education Language",
    },
  ]);

  const clearFilters = () => {
    setSelectedFilters({
      country: [],
      universityType: [],
      gradeType: [],
      educationType: [],
      campusType: [],
      educationLanguage: [],
    });
  };

  const handleSelectedOption = (filterType, option) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(option)
        ? prevFilters[filterType].filter((item) => item !== option)
        : [...prevFilters[filterType], option],
    }));
  };

  useEffect(() => {
    console.log(selectedFilters.country);
  }, [selectedFilters]);

  useEffect(() => {
    const filtered = universities.filter((university) => {
      return (
        (selectedFilters.country.length === 0 ||
          selectedFilters.country.includes(university.country)) &&
        (selectedFilters.universityType.length === 0 ||
          selectedFilters.universityType.includes(university.universityType)) &&
        (selectedFilters.gradeType.length === 0 ||
          selectedFilters.gradeType.includes(university.gradeType)) &&
        (selectedFilters.educationType.length === 0 ||
          selectedFilters.educationType.includes(university.educationType)) &&
        (selectedFilters.campusType.length === 0 ||
          selectedFilters.campusType.includes(university.campusType)) &&
        (selectedFilters.educationLanguage.length === 0 ||
          selectedFilters.educationLanguage.includes(
            university.educationLanguage
          ))
      );
    });
    setFilteredUniversities(filtered);
    setCurrentPage(1);
  }, [selectedFilters]);

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
        selectedFilters,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, DataContext };
