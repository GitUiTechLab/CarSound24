import React, { useState } from "react";
import Header from "../header-section/Header";
import SubHeader from "../header-section/SubHeader";
import Footer from "../footer-section/Footer";
import ProductFilters from "./ProductFilters";
import ProductList from "./ProductList";
import "./Product.css";

function ProductPage() {
    const [sortOption, setSortOption] = useState("Recommended");

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div>
            <Header />
            <SubHeader styleHeader={"productpage-subheader"} />
            <div className="product-page-container">
                <div className="breadcrumb-container">
                    <div className="breadcrumb">
                        <span>Home {">"} Category Name</span> {">"} Product Name
                    </div>
                    <div className="sort-by">
                        Sort By :{" "}
                        <select onChange={handleSortChange}>
                            <option>Recommended</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>  
                <div className="content">
                    <ProductFilters />
                    <ProductList sortOption={sortOption} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;
