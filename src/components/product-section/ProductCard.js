import React, { useState } from 'react';
import '../product-section/Product.css';
import { useNavigate } from "react-router-dom"; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false); 
  const navigate = useNavigate();

  const handleViewProduct = () => {
      navigate("/productdetails");
  };

  const nextImage = () => {
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const displayImage = product.images && product.images.length > 0 
    ? product.images[currentImageIndex]
    : product.image; 

  return (
    <div className="product-card" onMouseOver={nextImage}>
      <div className="product-image-container">
        <i 
          className={`favorite-icon ${isFavorited ? 'fas' : 'far'} fa-heart`} 
          onClick={toggleFavorite}
        ></i>
        <img src={displayImage} alt={product.name} className="product-image" />
        <div className="image-indicator">
          {product.images && product.images.length > 0 && product.images.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${currentImageIndex === index ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
      <div className="product-buttons">
        <button onClick={handleViewProduct} className="view-product-button">View Product</button>
        <button className="add-to-cart-button"><div className='plus-circle'>+</div>Add to Cart</button>
      </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
