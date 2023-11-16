const options = [
  {
    label: "Country",
    options: ["Country 1", "Country 2", "Country 3", "Country 4", "Country 5"],
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

export default options;
