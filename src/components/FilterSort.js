"use client";

import React, { useState } from "react";
import "../styles/FilterSort.css";

const FilterSort = ({
  products,
  toggleFilter,
  filterVisible,
  onSortChange,
}) => {
  return (
    <div className="containerStyle">
      <div className="filterAndSortContainer">
        <p className="itemCount">{products.length} ITEMS</p>
        <div className="filterButtons">
          <button className="filterMinimizeBtn" onClick={toggleFilter}>
            {filterVisible ? "FILTER" : "FILTER"}
          </button>
          <button className="filterMinimizeBtn" onClick={toggleFilter}>
            {filterVisible ? "< HIDE FILTER" : "> SHOW FILTER"}
          </button>
        </div>
      </div>
      <select
        className="dropdownStyle"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="recommended">recommended</option>
        <option value="newest">newest first</option>
        <option value="popular">popular</option>
        <option value="price-high">price: high to low</option>
        <option value="price-low">price: low to high</option>
      </select>
    </div>
  );
};

export default FilterSort;
