import React from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfo from "../ProductInfo/ProductInfo";
import PriceDisplay from "../PriceDisplay/PriceDisplay";
import ActionButtons from "../ActionButtons/ActionButtons";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
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

