import React, { useState } from 'react';
import './ProductDetails.css';

const ProductImage = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="product-image-gallery">
            <div className="breadcrumb">
                <span><a href="/">Home</a> &gt; <a href="/category">Category Name</a></span> &gt; Product Name
            </div>
            <img src={selectedImage} alt="Product" className="main-image" />
            <div className="thumbnail-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImage;
