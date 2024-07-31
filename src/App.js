import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import ProductDetails from "./components/product-details/ProductDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
