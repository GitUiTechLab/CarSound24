import React from "react";
import ProductCard from "./ProductCard";
import productImage from "../../assets/prod-1.png"; 
import heartIcon from "../../assets/heart.png";
import "../../css/Homepage.css";
import Underline from "../../assets/underline.png";
import Arrow from "../../assets/arrow.png";

const products = [
    {
        id: 1,
        name: "Blaupunkt Key Largo 980 - 25.55cm - 10.1 inches",
        price: "₹ 47,490.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 2,
        name: "Pioneer AVH-X7800BT - 17.78cm - 7 inches",
        price: "₹ 39,990.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 3,
        name: "Sony XAV-AX7000 - 22.86cm - 9 inches",
        price: "₹ 35,000.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 4,
        name: "Kenwood DDX919WS - 17.78cm - 7 inches",
        price: "₹ 32,990.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 5,
        name: "JVC KW-M560BT - 15.24cm - 6 inches",
        price: "₹ 25,490.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 6,
        name: "Alpine ILX-W650 - 17.78cm - 7 inches",
        price: "₹ 29,990.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 7,
        name: "Clarion NX706 - 17.78cm - 7 inches",
        price: "₹ 27,000.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 8,
        name: "Panasonic CY-PTZ50 - 15.24cm - 6 inches",
        price: "₹ 22,500.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 9,
        name: "Boss Audio BV9976B - 17.78cm - 7 inches",
        price: "₹ 18,490.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 10,
        name: "Xtrons TE706PL - 17.78cm - 7 inches",
        price: "₹ 19,990.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 11,
        name: "Eonon GA2187 - 22.86cm - 9 inches",
        price: "₹ 23,990.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 12,
        name: "Blaupunkt San Marino 330 - 15.24cm - 6 inches",
        price: "₹ 21,490.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    {
        id: 13,
        name: "JVC KW-M740BT - 17.78cm - 7 inches",
        price: "₹ 29,990.00",
        image: productImage,
        favoriteIcon: heartIcon,
    },
    // Add more products as needed...
];

function ProductList() {
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
              <button className="view-all-btn">View All <img src={Arrow} alt="Arrow" /></button>
            </div>
        </div>
    );
}

export default ProductList;
