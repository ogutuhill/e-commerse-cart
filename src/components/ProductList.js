import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
