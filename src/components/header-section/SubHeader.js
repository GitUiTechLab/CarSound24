import React from "react";
import logo from "../../assets/logo.png";
// import Search from "../../assets/search.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../header-section/Header.css";

function SubHeader({ isScrolled, styleHeader }) {
    const navigate = useNavigate();

    const handleContactUs = () => {
        navigate("/contactus");
    };

    const handleLogoClick = () => {
        navigate("/");
    };
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
                        href="#shop"
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
        </header>
    );
}

export default SubHeader;
