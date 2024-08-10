import React from "react";
import products from "./ProductData";
import '../product-section/Product.css';
import ProductCard from "./ProductCard";
import Arrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import Underline from "../../assets/underline.png";


function Product() {
    const navigate = useNavigate();

    const handleViewAll = () => {
        navigate("/productpage");
    };
    return (
        <div className="product-card-container">
            <div className="product-head">
                <h2>
                    View our <span>Products</span>
                </h2>
                <img src={Underline} alt="Underline" className="product-underline" />
            </div>
            <div className="product-list">
                {products.slice(0, 12).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="view-all-container">
              <button onClick={handleViewAll} className="view-all-btn">View All <img src={Arrow} alt="Arrow" /></button>
            </div>
        </div>
    );
}

export default Product;



