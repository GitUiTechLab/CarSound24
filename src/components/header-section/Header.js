import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faBox,
    faHeart,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Call from "../../assets/call.png";
import Mail from "../../assets/mail.png";
import Cart from "../../assets/cart.png";
import User from "../../assets/user.png";
import "../header-section/Header.css";

function Header({ styleNavbar }) {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace this with actual login state

    const handleSignUp = () => {
        navigate("/signup");
    };

    const handleCart = () => {
        navigate("/emptycart");
    };

    const handleUserSignIn = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        // Handle logout logic here
        setIsLoggedIn(false);
        setDropdownOpen(false);
        navigate("/logout");
    };

    return (
        <header className="header-wrapper">
            <div className="header-top">
                <div className="contact-info">
                    <div className="header-call">
                        <img src={Call} alt="Call" />
                        <span>(252) 555-0126</span>
                    </div>
                    <div className="header-mail">
                        <img src={Mail} alt="Mail" />
                        <span>alma.lawson@example.com</span>
                    </div>
                </div>
                <div className={`user-actions ${styleNavbar}`}>
                    <div onClick={handleCart} className="header-cart">
                        <img src={Cart} alt="Cart" />
                        <div>Cart</div>
                    </div>
                    {!isLoggedIn ? (
                        <div onClick={handleSignUp} className="header-login">
                            <img src={User} alt="User" />
                            <div>Sign Up/Sign In</div>
                        </div>
                    ) : (
                        <div
                            className="header-User-Signin"
                            onClick={handleUserSignIn}
                        >
                            <img src={User} alt="User" />
                            <div>Username</div>
                            <IoIosArrowDown />
                            {dropdownOpen && (
                                <div className="user-dropdown-menu">
                                    <div
                                        className="user-dropdown-item"
                                        onClick={() => navigate("/profile")}
                                    >
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            className="dropdown-icon"
                                        />
                                        My Profile
                                    </div>
                                    <div
                                        className="user-dropdown-item"
                                        onClick={() => navigate("/orders")}
                                    >
                                        <FontAwesomeIcon
                                            icon={faBox}
                                            className="dropdown-icon"
                                        />
                                        Orders
                                    </div>
                                    <div
                                        className="user-dropdown-item"
                                        onClick={() => navigate("/wishlist")}
                                    >
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="dropdown-icon"
                                        />
                                        Wishlist
                                    </div>
                                    <div
                                        className="logout-btn"
                                        onClick={handleLogout}
                                    >
                                        <TbLogout2
                                            className="dropdown-icon" 
                                        />
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
