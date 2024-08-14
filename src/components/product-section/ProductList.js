import React from 'react';
import './Product.css';
import products from "./ProductData";
import ProductCard from './ProductCard';

const ProductList = ({ sortOption }) => {
  // Function to clean and convert price strings to numbers
  const cleanPrice = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g,""));
  };

  // Copy products array to avoid mutating the original data
  const sortedProducts = [...products];

  // Apply sorting based on the selected option
  if (sortOption === "lowToHigh") {
    sortedProducts.sort((a, b) => cleanPrice(a.price) - cleanPrice(b.price));
  } else if (sortOption === "highToLow") {
    sortedProducts.sort((a, b) => cleanPrice(b.price) - cleanPrice(a.price));
  }

  return (
    <div className="product-list-container">
      <div className="products">
        {sortedProducts.slice(0, 9).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
