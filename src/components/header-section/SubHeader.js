import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";
import "../header-section/Header.css";

function SubHeader({ isScrolled, styleHeader }) {
    const navigate = useNavigate();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleContactUs = () => {
        navigate("/contactus");
    };

    const handleLogoClick = () => {
        navigate("/");
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest(".category-dropdown") && !event.target.closest(".shop-link")) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        if (isDropdownVisible) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isDropdownVisible]);

    return (
        <header className={`sub-header ${styleHeader} ${isScrolled ? "scrolled" : ""}`}>
            <nav className="nav">
                <div onClick={handleLogoClick} className="logo">
                    <img src={logo} alt="Car Sound 24" />
                </div>
                <div className={`search-bar ${isScrolled ? "scrolled" : ""}`}>
                    <input type="text" placeholder="Search for products" />
                    <button type="button">
                        <span aria-label="search">
                            <IoSearchOutline className="search-icon" />
                        </span>
                    </button>
                </div>
                <div className="nav-links">
                    <a
                        onClick={toggleDropdown}
                        className={`shop-link ${isScrolled ? "scrolled" : ""}`}
                    >
                        Shop by category
                        <IoMdArrowDropdown className="nav-arrow" />
                    </a>
                    <a
                        onClick={handleContactUs}
                        className={`nav-link ${isScrolled ? "scrolled" : ""}`}
                    >
                        Contact Us
                    </a>
                </div>
            </nav>
            <CategoryDropdown isVisible={isDropdownVisible} />
        </header>
    );
}

export default SubHeader;
