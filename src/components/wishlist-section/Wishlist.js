import React, { useEffect } from "react";
import "./Wishlist.css";
import Header from "../header-section/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../footer-section/Footer";
import SubHeader from "../header-section/SubHeader";
import { useWishlist } from "../../context/WishlistContext";


function Wishlist() {
    const { wishlist, setWishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedWishlist);
    }, [setWishlist]);

    const addToCart = (product) => {
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

    return (
        <div>
            <Header styleNavbar={"wishlist-header"} />
            <SubHeader styleHeader={"wishlist-subheader"} />

            <div className="wishlist-container">
                <div className="wishlist-length">
                    <h2>My Wishlist <span>({wishlist.length} items)</span></h2>
                </div>
                <div className="wishlist">
                    {wishlist.map((product) => (
                        <div className="wishlist-item" key={product.id}>
                            <div className="wishlist-image-container">
                                {product.images && product.images[0] && (
                                    <img src={product.images[0]} alt={product.name} />
                                )}
                            </div>
                            <div className="item-details-container">
                                <div className="item-details">
                                    <div className="product-name">{product.name}</div>
                                    <p className="price">
                                        {product.discountedPrice || product.price}{" "}
                                        <span className="old-price">
                                            {product.originalPrice}
                                        </span>
                                    </p>
                                </div>
                                <div className="item-actions">
                                    <button onClick={() => addToCart(product)} className="add-to-cart">
                                        +{" "} Add to cart
                                    </button>
                                    <button
                                        className="delete"
                                        onClick={() =>
                                            removeFromWishlist(product.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Wishlist;
