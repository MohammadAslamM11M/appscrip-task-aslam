import React from "react";
import FilterAccordion from "./FilterAccordion";
import "../styles/SideBarFilter.css";

const SideBarFilter = () => {
  const accordionData = [
    {
      title: "Ideal For",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "Occasion",
      options: ["Formal", "Ethnic", "Casual"],
    },
    {
      title: "Work",
      options: ["Stone", "Embroidery", "Print"],
    },
    {
      title: "Fabric",
      options: ["Cotton", "Nylon", "Polyster"],
    },
    {
      title: "Segment",
      options: ["Office", "Sports", "Fancy"],
    },
    {
      title: "Suitable For",
      options: ["Adults", "Kids", "Teens"],
    },
    {
      title: "Raw Material",
      options: ["Wool", "Silk", "Flax"],
    },
    {
      title: "Pattern",
      options: ["Checkered", "Lines", "Solid Color"],
    },
  ];

  return (
    <div>
      <div className="sideBar">
        <input type="checkbox" />
        <label>customizble</label>
      </div>
      {accordionData.map((item, index) => (
        <FilterAccordion
          key={index}
          title={item.title}
          options={item.options}
        />
      ))}
    </div>
  );
};

export default SideBarFilter;
