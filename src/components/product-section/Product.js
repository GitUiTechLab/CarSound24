import React from 'react'
import Underline from '../../assets/underline.png';
import productImage from "../../assets/cat-1.jpeg";
import '../../css/Homepage.css';

const products = [
  { id: 1, name: "Blaupunkt Key Largo 980 - 25.55cm - 10.1inches", price: "₹ 47,490.00", image: productImage },
  // Add more products here...
];

function Product() {
  return (
    <div className="view-our-products">
      <h2>View our <span>Products</span></h2>
      <img src={Underline} alt="Underline" className='product-underline' />
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <p>{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
            <div className="product-buttons">
              <button className="view-product-button">View Product</button>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All</button>
    </div>
  )
}

export default Product