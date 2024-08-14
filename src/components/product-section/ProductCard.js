import React, { useState, useEffect } from "react";
import "../product-section/Product.css";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWishlist, setIsWishlist] = useState(false);
    const navigate = useNavigate();

    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

    useEffect(() => {
        const isInWishlist = wishlist.some((item) => item.id === product.id);
        setIsWishlist(isInWishlist);
    }, [wishlist, product.id]);

    const toggleWishlist = () => {
        if (isWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
        setIsWishlist(!isWishlist);
    };

    const handleViewProduct = () => {
        navigate("/productdetails", { state: { productId: product.id } });
    };

    const nextImage = () => {
        if (product.images && product.images.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const itemExists = cartItems.some((item) => item.id === product.id);

        if (!itemExists) {
            cartItems.push({ ...product });
            localStorage.setItem("cart", JSON.stringify(cartItems));
            navigate("/shoppingcart");
        } else {
            alert("Item is already in the cart");
        }
    };

    const displayImage =
        product.images && product.images.length > 0
            ? product.images[currentImageIndex]
            : product.image;

    return (
        <div className="product-card">
            <div className="product-image-container" onMouseEnter={nextImage}>
                <i
                    className={`favorite-icon ${
                        isWishlist ? "fas" : "far"
                    } fa-heart`}
                    onClick={toggleWishlist}
                    aria-label="Toggle favorite"
                ></i>
                <img
                    src={displayImage}
                    alt={product.name}
                    className="product-image"
                />
                <div className="image-indicator">
                    {product.images &&
                        product.images.length > 0 &&
                        product.images.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator-dot ${
                                    currentImageIndex === index ? "active" : ""
                                }`}
                            ></span>
                        ))}
                </div>
            </div>
            <div className="product-buttons">
                <button
                    onClick={handleViewProduct}
                    className="view-product-button"
                >
                    View Product
                </button>
                <button onClick={addToCart} className="add-to-cart-button">
                    <div className="plus-circle">+</div>Add to Cart
                </button>
            </div>
            <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
