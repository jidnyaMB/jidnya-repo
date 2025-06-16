import React from "react";
import PropTypes from "prop-types";

export default function ProductImage({ src, alt }) {
  return <img src={src} alt={alt} style={{ width:'100%', borderRadius:'10px'}} />;
}

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

