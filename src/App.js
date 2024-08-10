import React from "react";
import "./App.css";
import Main from "./Main";
import SignUp from "./components/signup-page/SignUp";
import Profile from "./components/profile-page/Profile";
import { WishlistProvider } from './context/WishlistContext';
import Wishlist from "./components/wishlist-section/Wishlist";
import Rating from "./components/order-section/rating/Rating";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyOrders from "./components/order-section/order/MyOrders";
import EmptyCart from "./components/order-section/cart/EmptyCart";
import ProductPage from "./components/product-section/ProductPage";
import ContactUsPage from "./components/contact-section/ContactUsPage";
import OrderDetails from "./components/order-section/order/OrderDetails";
import ProductDetails from "./components/product-details/ProductDetails";
import ShoppingCart from "./components/order-section/shopping-cart/ShoppingCart";

function App() {
    return (
        <WishlistProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/rating" element={<Rating />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/myorders" element={<MyOrders />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/emptycart" element={<EmptyCart />} />
                    <Route path="/productpage" element={<ProductPage />} />
                    <Route path="/contactus" element={<ContactUsPage />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                    <Route path="order-details" element={<OrderDetails />} />
                    <Route path="/productdetails" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </WishlistProvider>
    );
}

export default App;
