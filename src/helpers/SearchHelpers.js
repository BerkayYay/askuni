const handleSearch = ({
  value,
  universities,
  setFilteredUniversities,
  setCurrentPage,
  setUniversities,
  setTotalPages,
  universitiesPerPage,
  filteredUniversities,
}) => {
  const filteredData = universities.filter((university) => {
    const lowerCaseValue = value.toLowerCase();
    return (
      university.universityName.toLowerCase().includes(lowerCaseValue) ||
      university.department.toLowerCase().includes(lowerCaseValue) ||
      university.educationLanguage.toLowerCase().includes(lowerCaseValue) ||
      university.universityType.toLowerCase().includes(lowerCaseValue)
    );
  });
  setFilteredUniversities(filteredData);
  setCurrentPage(1);
  //   setUniversities(filteredData.slice(0, universitiesPerPage));
  setTotalPages(
    filteredUniversities.length > 0
      ? Math.ceil(filteredUniversities.length / universitiesPerPage)
      : 1
  );
  value === "" &&
    setTotalPages(Math.ceil(universities.length / universitiesPerPage));
};

export { handleSearch };
