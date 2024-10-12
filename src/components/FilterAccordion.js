"use client";

import React, { useState } from "react";
import "../styles/FilterAccordion.css";

const FilterAccordion = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAccordion} className="sideBarFilter">
        {isOpen ? (
          <h4 className="dropdownHeading">
            {title}
            <img
              src="/upArrowIcon.png"
              alt="up arrow"
              className="dropdownArrow"
            />
          </h4>
        ) : (
          <h4 className="dropdownHeading">
            {title}
            <img
              src="/downArrowIcon.png"
              alt="up arrow"
              className="dropdownArrow"
            />
          </h4>
        )}

        <p style={{ textTransform: "capitalize" }}>All</p>
      </div>
      {isOpen && (
        <div>
          <p
            style={{
              color: "grey",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            Unselect all
          </p>
          {options ? (
            options.map((option, index) => (
              <div key={index} style={{ padding: "8px 0" }}>
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  name={option}
                  value={option}
                  style={{ cursor: "pointer" }}
                />
                <label
                  style={{ cursor: "pointer" }}
                  htmlFor={`checkbox-${index}`}
                >
                  {option}
                </label>
              </div>
            ))
          ) : (
            <p>{null}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterAccordion;
