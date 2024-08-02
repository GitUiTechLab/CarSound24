import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import ProductDetails from "./components/product-details/ProductDetails";
import ProductPage from "./components/product-section/ProductPage";
import SignUp from "./components/signup-page/SignUp";
import ContactUsPage from "./components/contact-section/ContactUsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product" element={<ProductDetails />} />
                <Route path="/productpage" element={<ProductPage />} />
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/contactus" element={<ContactUsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
