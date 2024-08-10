import React from 'react';
import './Product.css';
import products from "./ProductData";
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="product-list-container">
      <div className="products">
        {products.slice(0, 9).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
