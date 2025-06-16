import React from "react";
import PropTypes from "prop-types";

export default function ProductInfo({ name, category }) {
  return (
    <div style={{ marginBottom:'10px' }}>
      <h3>{name}</h3>
      <p>{category}</p>
    </div>
  )
}

ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

