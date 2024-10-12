"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterSort from "@/components/FilterSort";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProductGrid from "@/components/ProductGrid";
import SideBarFilter from "@/components/SideBarFilter";
import "./page.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filterVisible, setFilterVisible] = useState(true);
  const [sortOptions, setSortOptions] = useState("recommended");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleSortChange = (value) => {
    setSortOptions(value);
  };

  return (
    <>
      <Header />
      <NavBar />
      <Hero />
      <FilterSort
        products={products}
        toggleFilter={toggleFilter}
        filterVisible={filterVisible}
        onSortChange={handleSortChange}
      />
      <div className="gridContainer">
        {filterVisible && (
          <div
            className="sideBarFilter"
            style={{ width: "20%", padding: "10px" }}
          >
            <SideBarFilter />
          </div>
        )}
        <div
          className={{ filterVisible } ? "sideBarActive" : "sideBarDeactive"}
          style={{ width: filterVisible ? "80%" : "100%" }}
        >
          <ProductGrid products={products} />
        </div>
      </div>
      <Footer />
    </>
  );
}
