import React from 'react';
import './ShoppingCart.css';

const CartSummary = ({ cartItems }) => {
    const subtotal = cartItems.reduce((sum, item) => {
        const priceString = item.discountedPrice ? item.discountedPrice : item.price || '0';
        const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
        const itemTotal = isNaN(price) ? 0 : price * (item.quantity || 1);
        return sum + itemTotal;
    }, 0);

    const shipping = 100;
    const total = subtotal + shipping;

    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className='cartsummary-container'>
                <div className="cart-summary-item">
                    <span>Total Items</span>
                    <span>{cartItems.length}</span>
                </div>
                <div className="cart-summary-item">
                    <span>Sub total</span>
                    <span>₹ {subtotal.toFixed(2)}</span>
                </div>
                <div className="cart-summary-item">
                    <span>Shipping</span>
                    <span>₹ {shipping.toFixed(2)}</span>
                </div>
                <hr className="summary-divider" />
                <div className="cart-summary-item total-cost">
                    <span>Total Cost</span>
                    <span>₹ {total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
