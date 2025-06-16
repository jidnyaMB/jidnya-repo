import React from "react";
import PropTypes from "prop-types";

export default function FilterBar({ categories, onSelect }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Filter by Categories: </label>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}

FilterBar.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

