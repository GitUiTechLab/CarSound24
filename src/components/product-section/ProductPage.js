import React from "react";
import Header from "../header-section/Header";
import SubHeader from "../header-section/SubHeader";
import Footer from "../footer-section/Footer";
import ProductFilters from "./ProductFilters";
import ProductList from "./ProductList";
import "./Product.css";

function ProductPage() {
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
                        <select>
                            <option>Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>  
                <div className="content">
                    <ProductFilters />
                    <ProductList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;
