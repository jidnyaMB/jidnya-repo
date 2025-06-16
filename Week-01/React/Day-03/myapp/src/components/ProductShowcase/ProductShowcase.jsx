// src/components/ProductShowcase/ProductShowcase.jsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import { products } from "../../data/product";
// import styles from "./ProductShowcase.module.css";

export default function ProductShowcase() {
  // state to track currently selected filter
  const [filter, setFilter] = useState("");

  // extract unique categories for FilterBar
  const categories = [...new Set(products.map((p) => p.category))];
  
  // filter products based on selected category
  const filteredProducts = filter
    ? products.filter((p) => p.category === filter)
    : products;

  return (
    <>
      {/* Filter products by category */}
      <FilterBar categories={categories} onSelect={setFilter} />

      {/* Display products in a grid */}
      {/* <div className={styles.grid}> */}
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
