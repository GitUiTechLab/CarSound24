import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import chatImg from "../../assets/whatsapp.png";
import { useWishlist } from '../../context/WishlistContext';
import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProdDetails = ({ product }) => {
    const [isWishlist, setIsWishlist] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push({ ...product, quantity: selectedQuantity });
        localStorage.setItem('cart', JSON.stringify(cartItems));
        navigate('/shoppingcart');
    };

    useEffect(() => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
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

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleSelectQuantity = (quantity) => {
        setSelectedQuantity(quantity);
        closeDropdown();
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            closeDropdown();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="product-details-section">
            <div className="prod-contatainer">
                <div>
                    <h1>{product.name}</h1>
                    <p className="product-description">
                        {product.description} <a href="/read-more">Read More</a>
                    </p>
                    <div className="product-rating">
                        <span className="star">★</span>{" "}
                        <span className="starrate">{product.rating} Rating</span> |{" "}
                        <span>{product.reviews} reviews</span>
                    </div>
                    <div className="product-price-section">
                        <span className="discounted-price">
                            {product.discountedPrice}
                        </span>
                        <span className="original-price">
                            {product.originalPrice}
                        </span>
                        <span className="tax-info">Inclusive of all taxes</span>
                    </div>
                </div>
                <div className="share-buttons">
                    <div className="share-container">
                        <div className="wishlist-button">
                            <i
                                className={`wishlist-icon ${
                                    isWishlist ? "fas" : "far"
                                } fa-heart`}
                                onClick={toggleWishlist}
                            ></i>
                        </div>
                        <label>wishlist</label>
                    </div>
                    <div className="share-container">
                        <div className="chat-button">
                            <img src={chatImg} alt="Chat Button" />
                        </div>
                        <label>Chat</label>
                    </div>
                    <div className="share-container">
                        <div className="share-button">
                            <i className="fa fa-share-alt"></i>
                        </div>
                        <label>Share</label>
                    </div>
                </div>
            </div>

            <div className="product-quantity-selector">
                <div className="qty-button" onClick={openDropdown}>
                    <div>{selectedQuantity}</div>
                    <label>Qty</label>
                    <i className="fas fa-chevron-down"></i>
                </div>
                {isDropdownOpen && (
                    <div className="quantity-dropdown" ref={dropdownRef}>
                        <ul>
                            {[...Array(5).keys()].map((num) => (
                                <li key={num + 1} onClick={() => handleSelectQuantity(num + 1)}>
                                    {num + 1}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button className="addtocart-button" onClick={addToCart}><span>+</span>Add to Cart</button>
            </div>

            <div className="product-general-specifications">
                <h2>General Specifications</h2>
                <ul>
                    {product.generalSpecifications.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProdDetails;
