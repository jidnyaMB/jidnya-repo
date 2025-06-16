import React from "react";
import ProductImage from "../ProductImage";
import ProductInfo from "../ProductInfo";
import PriceDisplay from "../PriceDisplay";
import ActionButtons from "../ActionButtons";
import PropTypes from "prop-types";
// import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <ProductImage src={product.img} alt={product.name} />
      <ProductInfo name={product.name} category={product.category} />
      <PriceDisplay price={product.price} />
      <ActionButtons productId={product.id} />
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

