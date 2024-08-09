import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import touchscreenImage from "../../assets/cat-1.jpeg";
import inDashNavigationImage from "../../assets/cat-2.jpeg";
import dvdVideoPlayersImage from "../../assets/cat-3.jpeg";
import digitalMediaReceiversImage from "../../assets/cat-4.jpeg";
import bluetoothCarKitsImage from "../../assets/cat-5.jpeg";
import amplifiersEqualizersImage from "../../assets/cat-6.jpeg";
import Underline from "../../assets/underline.png";
import "./Category.css";

const categories = [
    { 
        id: 1, 
        name: "Touchscreen", 
        image: touchscreenImage 
    },
    { 
        id: 2, 
        name: "In-Dash Navigation", 
        image: inDashNavigationImage 
    },
    { 
        id: 3, 
        name: "DVD & Video Players", 
        image: dvdVideoPlayersImage 
    },
    {
        id: 4,
        name: "Digital Media Receivers",
        image: digitalMediaReceiversImage,
    },
    { 
        id: 5, 
        name: "Bluetooth Car Kits", 
        image: bluetoothCarKitsImage 
    },
    {
        id: 6,
        name: "Amplifiers & Equalizers",
        image: amplifiersEqualizersImage,
    },
    { 
        id: 7, 
        name: "Touchscreen", 
        image: touchscreenImage 
    },
    { 
        id: 8, 
        name: "In-Dash Navigation", 
        image: inDashNavigationImage 
    },
    { 
        id: 9, 
        name: "DVD & Video Players", 
        image: dvdVideoPlayersImage 
    },
    {
        id: 10,
        name: "Digital Media Receivers",
        image: digitalMediaReceiversImage,
    },
    { 
        id: 11,
        name: "Bluetooth Car Kits", 
        image: bluetoothCarKitsImage 
    },
    {
        id: 12,
        name: "Amplifiers & Equalizers",
        image: amplifiersEqualizersImage,
    },
];


function Category() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleClick = (id) => {
        setSelectedCategory(id);
    };

    const handleProductPage = () => {
        navigate("/productpage");
    };

    return (
        <div className="shop-by-category">
            <div className="category-head">
                <h2>
                    Shop by <span>Category</span>
                </h2>
                <img src={Underline} alt="Underline" className="underline" />
            </div>
            <div className="slider-container">
                <div className="categories">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`categoryItem ${
                                selectedCategory === category.id ? "selected" : ""
                            }`}
                            onClick={() => handleClick(category.id)}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="categoryImg"
                                onClick={handleProductPage}
                            />
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;
