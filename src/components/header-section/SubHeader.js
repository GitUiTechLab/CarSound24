import React from 'react';
import '../../css/Homepage.css';
import logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import { IoMdArrowDropdown } from "react-icons/io";

function SubHeader({ isScrolled }) {
  return (
    <header className={`sub-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Car Sound 24" />
        </div>
        <div className={`search-bar ${isScrolled ? 'scrolled' : ''}`}>
          <input type="text" placeholder="Search for products" />
          <button type="button">
            <span role="img" aria-label="search">
              <img src={Search} alt="Search" />
            </span>
          </button>
        </div>
        <div className="nav-links">
          <a href="#shop" className={`shop-link ${isScrolled ? 'scrolled' : ''}`}>
            Shop by category
            <IoMdArrowDropdown className="nav-arrow" />
          </a>
          <a href="#contact" className={`nav-link ${isScrolled ? 'scrolled' : ''}`}>
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}

export default SubHeader;
