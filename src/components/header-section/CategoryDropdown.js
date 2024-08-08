import React, { useState } from "react";
import CatImg1 from "../../assets/shopbycat-1.png";
import CatImg2 from "../../assets/shopbycat-2.jpeg";
import "./CategoryDropdown.css";

const categoriesData = [
    {
        category: "Category 1",
        items: [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5",
            "Item 6",
            "Item 7",
        ],
    },
    {
        category: "Category 2",
        items: [
            "Item 8",
            "Item 9",
            "Item 10",
            "Item 11",
            "Item 12",
            "Item 13",
            "Item 14",
        ],
    },
    {
        category: "Category 3",
        items: [
            "Item 15",
            "Item 16",
            "Item 17",
            "Item 18",
            "Item 19",
            "Item 20",
            "Item 21",
        ],
    },
    {
        category: "Category 4",
        items: [
            "Item 22",
            "Item 23",
            "Item 24",
            "Item 25",
            "Item 26",
            "Item 27",
            "Item 28",
        ],
    },
];

const CategoryDropdown = ({ isVisible, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    if (!isVisible) return null;

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="category-dropdown">
            <div className="category-container">
                {categoriesData.map((category, index) => (
                    <div
                        key={index}
                        className={`category-column ${
                            activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => handleItemClick(index)}
                    >
                        <h3>{category.category}</h3>
                        <ul>
                            {category.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="category-images-container">
                <div className="catImg-wrapper">
                    <div className="cat-banner-text">Flat <span>50%</span> off on Car Stereos</div>
                    <img src={CatImg1} alt="Sale 1" />
                </div>
                <div className="catImg-wrapper">
                    <div className="cat-banner-text">Flat <span>30% </span> off on Amplifiers</div>
                    <img src={CatImg2} alt="Sale 2" />
                </div>
            </div>
        </div>
    );
};

export default CategoryDropdown;
