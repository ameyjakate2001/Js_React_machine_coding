// DogTable.jsx
import { useState, useEffect } from "react";
import InputField from "./components/InputField";
import Table from "./components/Table";
import FilterModal from "./FilterModal";

const DogTable = () => {
  const endpointUrl = "https://data.webdevinterviews.com/dogBreeds.json";
  const [dogsData, setDogsData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(true);
  const [filterQuery, setFilterQuery] = useState({
    avgWeight: "",
    avgHeight: "",
    avgLifespan: "",
    isActive: "",
    weightComparison: "greaterThan",
    heightComparison: "greaterThan",
    lifespanComparison: "greaterThan",
  });

  const handleFilter = () => {};

  const handleInputTextChange = (value) => {
    setInputText(value);
    const filteredData = originalData.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    );
    setDogsData(filteredData);
  };

  const handleSortBy = (value, dir) => {
    setDogsData((prevData) => {
      return [...prevData].sort((a, b) => {
        const nameA = a[value];
        const nameB = b[value];
        if (dir === "asc") {
          return a[value] > b[value] ? 1 : -1;
        } else {
          return a[value] < b[value] ? 1 : -1;
        }
      });
    });
  };

  useEffect(() => {
    async function fetchDogData() {
      setLoading(true);
      const response = await fetch(endpointUrl);
      const data = await response.json();
      setLoading(false);
      setDogsData(data);
      setOriginalData(data);
    }
    try {
      fetchDogData();
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }, []);

  const handleOpenFilterModal = () => {
    console.log("hi");
    setShowFilterModal(true);
  };
  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
  };

  return (
    <div className="App">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="navbar">
            <InputField
              inputText={inputText}
              onChange={handleInputTextChange}
            />
            <button className="btn" onClick={handleOpenFilterModal}>
              Filter
            </button>
          </div>
          <Table data={dogsData} handleSortBy={handleSortBy} />
        </>
      )}
      {showFilterModal && (
        <FilterModal
          handleCloseFilterModal={handleCloseFilterModal}
          handleFilter={handleFilter}
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          dogsData={dogsData}
          setDogsData={setDogsData}
          originalData={originalData}
        />
      )}
    </div>
  );
};
export default DogTable;
