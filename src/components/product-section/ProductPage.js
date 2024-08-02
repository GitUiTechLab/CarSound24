import React from "react";
import Header from "../header-section/Header";
import SubHeader from "../header-section/SubHeader";
import Footer from "../footer-section/Footer";
import ProductCard from "../product-section/ProductCard"; // Assuming you have a ProductCard component

function ProductPage() {
    return (
        <div>
            <Header />
            <SubHeader />
            <div className="product-page">
                <aside className="sidebar">
                    {/* Filters */}
                    <div className="filter-section">
                        <h3>Filters</h3>
                        <div className="filter-group">
                            <h4>Price</h4>
                            {/* Add price filters here */}
                        </div>
                        <div className="filter-group">
                            <h4>Category</h4>
                            {/* Add category filters here */}
                        </div>
                        <div className="filter-group">
                            <h4>Brand</h4>
                            {/* Add brand filters here */}
                        </div>
                    </div>
                </aside>
                <main className="main-content">
                    <div className="breadcrumb">
                        {/* Breadcrumb */}
                        <p>Home > Category Name > Product Name</p>
                    </div>
                    <div className="sort-bar">
                        {/* Sorting Options */}
                        <label>Sort By: </label>
                        <select>
                            <option value="recommended">Recommended</option>
                            <option value="price-low-to-high">
                                Price: Low to High
                            </option>
                            <option value="price-high-to-low">
                                Price: High to Low
                            </option>
                        </select>
                    </div>
                    <div className="product-grid">
                        {/* Products */}
                        
                        {/* Add more ProductCard components as needed */}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;
