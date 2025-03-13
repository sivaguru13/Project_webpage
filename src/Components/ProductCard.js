import React from "react";
import "./ProductCard.css"; // Optional: For styling

const ProductCard = ({product}) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="product-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
