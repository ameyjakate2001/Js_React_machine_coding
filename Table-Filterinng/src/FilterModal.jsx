import { useState } from "react";
import CustomInput from "./CustomInput";

const FilterModal = ({
  handleCloseFilterModal,
  filterQuery,
  setFilterQuery,
  dogsData,
  setDogsData,
  originalData,
}) => {
  const handleFilterChange = (key, value) => {
    setFilterQuery((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = () => {
    let filteredBreeds = dogsData;

    if (filterQuery.avgWeight !== "") {
      const weightComparison = filterQuery.weightComparison;

      filteredBreeds = filteredBreeds.filter((breed) => {
        const breedWeight = breed.avgWeight;
        const filterWeight = parseFloat(filterQuery.avgWeight);

        if (weightComparison === "lessThan") {
          return breedWeight < filterWeight;
        } else if (weightComparison === "greaterThan") {
          return breedWeight > filterWeight;
        } else {
          return breedWeight === filterWeight;
        }
      });
    }

    if (filterQuery.avgLifespan !== "") {
      const lifespanComparison = filterQuery.lifespanComparison;

      filteredBreeds = filteredBreeds.filter((breed) => {
        const breedLifespan = breed.avgLifespan;
        const filterLifespan = parseFloat(filterQuery.avgLifespan);

        if (lifespanComparison === "lessThan") {
          return breedLifespan < filterLifespan;
        } else if (lifespanComparison === "greaterThan") {
          return breedLifespan > filterLifespan;
        } else {
          return breedLifespan === filterLifespan;
        }
      });
    }

    if (filterQuery.avgHeight !== "") {
      const heightComparison = filterQuery.heightComparison;

      filteredBreeds = filteredBreeds.filter((breed) => {
        const breedHeight = breed.avgHeight;
        const filterHeight = parseFloat(filterQuery.avgHeight);

        if (heightComparison === "lessThan") {
          return breedHeight < filterHeight;
        } else if (heightComparison === "greaterThan") {
          return breedHeight > filterHeight;
        } else {
          return breedHeight === filterHeight;
        }
      });
    }

    if (filterQuery.isActive !== "") {
      const isActiveFilter = filterQuery.isActive === "true";
      filteredBreeds = filteredBreeds.filter(
        (breed) => breed.isActive === isActiveFilter
      );
    }

    setDogsData(filteredBreeds);
    handleCloseFilterModal();
  };
  const handleResetFilters = () => {
    setFilterQuery({
      avgWeight: "",
      avgLifespan: "",
      avgHeight: "",
      isActive: "",
      weightComparison: "greaterThan",
      lifespanComparison: "greaterThan",
      heightComparison: "greaterThan",
    });
    setDogsData([...originalData]);
    handleCloseFilterModal();
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="filter-header">
          <h3>Filter List</h3>
          <button className="btn" onClick={handleCloseFilterModal}>
            &#x2717;
          </button>
        </div>
        <div className="filter-inputs">
          <CustomInput
            label="Weight"
            filterQuery={filterQuery}
            onChange={handleFilterChange}
            selectKey="weightComparison"
            keyValue="avgWeight"
          />
          <CustomInput
            label="Lifespan"
            filterQuery={filterQuery}
            onChange={handleFilterChange}
            selectKey="lifespanComparison"
            keyValue="avgLifespan"
          />
          <CustomInput
            label="Height"
            filterQuery={filterQuery}
            onChange={handleFilterChange}
            selectKey="lifespanComparison"
            keyValue="avgHeight"
          />
          <div className="input">
            <label htmlFor="">Active Breed</label>
            <select
              id="isActive"
              onChange={(e) => handleFilterChange("isActive", e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="">Any</option>
            </select>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn" onClick={handleResetFilters}>
            Reset Filters
          </button>
          <button className="btn" onClick={handleApplyFilters}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
export default FilterModal;
