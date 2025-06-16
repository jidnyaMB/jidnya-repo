import React from "react";
import PropTypes from "prop-types";

export default function ActionButtons({ productId }) {
  return (
    <div style={{ marginTop:'10px' }}>
      <button onClick={() => console.log('Add to Cart!', productId)}>Add to Cart</button>
      <button onClick={() => console.log('View Detail!', productId)}>View</button>
    </div>
  )
}

ActionButtons.propTypes = {
  productId: PropTypes.number.isRequired
};

