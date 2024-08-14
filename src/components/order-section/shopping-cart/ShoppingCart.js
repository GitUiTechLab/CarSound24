import React, { useState, useEffect, useCallback } from "react";
import "./ShoppingCart.css";
import Header from "../../header-section/Header";
import Footer from "../../footer-section/Footer";
import SubHeader from "../../header-section/SubHeader";
import { useWishlist } from '../../../context/WishlistContext';
import CartSummary from "../../order-section/shopping-cart/CartSummary";
import CheckoutForm from "../../order-section/shopping-cart/CheckoutForm";
import EmptyCart from "../../order-section/cart/EmptyCart"; 

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);

    const removeFromCart = useCallback((productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }, [cartItems]);

    const toggleWishlist = useCallback((item) => {
        const isInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);
        if (isInWishlist) {
            removeFromWishlist(item.id);
        } else {
            addToWishlist(item);
        }
    }, [wishlist, addToWishlist, removeFromWishlist]);

    return (
        <div>
            <Header />
            <SubHeader styleHeader={"shoppingcart-subheader"} />

            {cartItems.length === 0 ? (
                <EmptyCart />
            ) : (
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
                                        {item.image && (
                                            <img src={item.image} alt={item.name} />
                                        )}
                                    </div>
                                    <div className="cart-item-details">
                                        <h3>{item.name}</h3>
                                        <p className="shopprice">
                                            ₹ {item.discountedPrice || item.price}
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
            )}

            <Footer />
        </div>
    );
};

export default ShoppingCart;
