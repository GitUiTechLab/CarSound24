import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import ProductDetails from "./components/product-details/ProductDetails";
import ProductPage from "./components/product-section/ProductPage";
import SignUp from "./components/signup-page/SignUp";
import ContactUsPage from "./components/contact-section/ContactUsPage";
import Profile from "./components/profile-page/Profile";
import Rating from "./components/order-section/rating/Rating";
import EmptyCart from "./components/order-section/cart/EmptyCart";
import { WishlistProvider } from './context/WishlistContext';
import Wishlist from "./components/wishlist-section/Wishlist";
import ShoppingCart from "./components/order-section/shopping-cart/ShoppingCart";
import MyOrders from "./components/order-section/order/MyOrders";

function App() {
    return (
        <WishlistProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/productdetails" element={<ProductDetails />} />
                    <Route path="/productpage" element={<ProductPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/contactus" element={<ContactUsPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/rating" element={<Rating />} />
                    <Route path="/emptycart" element={<EmptyCart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                    <Route path="/myorders" element={<MyOrders />} />
                </Routes>
            </BrowserRouter>
        </WishlistProvider>
    );
}

export default App;
