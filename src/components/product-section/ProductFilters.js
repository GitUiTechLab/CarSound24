import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Product.css';

const ProductFilters = () => {
  return (
    <div className="filters-container">
      <div className="filter-section">
        <h3>Filters</h3>
        <div className="filter-tags">
          <div className="filter-tag">Lorem Ipsum <IoIosCloseCircleOutline className="close-icon" /></div>
          <div className="filter-tag">Lorem Ipsum <IoIosCloseCircleOutline className="close-icon" /></div>
          <div className="filter-tag">Lorem Ipsum <IoIosCloseCircleOutline className="close-icon" /></div>
          <div className="filter-tag">Lorem Ipsum <IoIosCloseCircleOutline className="close-icon" /></div>
        </div>
      </div>
      <div className="filter-section">
        <h3>Price</h3>
        <input type="range" min="0" max="100" className="price-range" />
        <div className="filter-options">
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
        </div>
      </div>
      <div className="filter-section">
        <h3>Category</h3>
        <div className="searchInput">
          <input type="text" placeholder="Search Category" />
          <CiSearch className="searchIcon" />
        </div>
        <div className="filter-options">
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
        </div>
      </div>
      <div className="filter-section">
        <h3>Brand</h3>
        <div className="searchInput">
          <input type="text" placeholder="Search Brand" />
          <CiSearch  className="searchIcon" />
        </div>
        <div className="filter-options">
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
          <div><input type="checkbox" /> Lore Ipsum</div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
