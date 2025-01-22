import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button 
        className="btn-primary" 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
