import React from "react";
import PropTypes from "prop-types";

export default function PriceDisplay({ price }) {
  return <strong>${price.toFixed(2)}</strong>;
}

PriceDisplay.propTypes = {
  price: PropTypes.number.isRequired
};

