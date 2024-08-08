import React, { useState, useEffect } from "react";
import Header from "../../header-section/Header";
import SubHeader from "../../header-section/SubHeader";
import Footer from "../../footer-section/Footer";
import { useWishlist } from '../../../context/WishlistContext';
import CartSummary from "../../order-section/shopping-cart/CartSummary";
import CheckoutForm from "../../order-section/shopping-cart/CheckoutForm";
import "./ShoppingCart.css";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const toggleWishlist = (item) => {
        const isInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);
        if (isInWishlist) {
            removeFromWishlist(item.id);
        } else {
            addToWishlist(item);
        }
    };

    return (
        <div>
            <Header />
            <SubHeader styleHeader={"shoppingcart-subheader"} />

            <div className="shoppingcart-container">
                <div className="shoppingcart-head">Cart</div>
                <div className="cartsummary-container">
                    <CartSummary cartItems={cartItems} />
                </div>

                <div className="order-checkout-container">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-image">
                                    {item.images && item.images[0] && (
                                        <img src={item.images[0]} alt={item.name} />
                                    )}
                                </div>
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p className="shopprice">
                                        ₹ {item.discountedPrice}
                                    </p>
                                    <div className="shoppingcart-item-actions">
                                        <button
                                            className="move-to-wishlist"
                                            onClick={() => toggleWishlist(item)}
                                        >
                                            <i
                                                className={`shopwishlist-icon ${
                                                    wishlist.some(wishlistItem => wishlistItem.id === item.id) ? "fas" : "far"
                                                } fa-heart`}
                                            ></i>{" "}
                                            Move to Wishlist
                                        </button>
                                        <button
                                            className="delete"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-container">
                        <CheckoutForm />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ShoppingCart;
