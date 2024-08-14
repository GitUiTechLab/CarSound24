import React, { useState, useEffect, useRef } from "react";
import "../header-section/Header.css";
import Call from "../../assets/call.png";
import Mail from "../../assets/mail.png";
import Cart from "../../assets/cart.png";
import User from "../../assets/user.png";
import { BsStack } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import LogoImg from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";

function Header({ styleNavbar }) {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(
        JSON.parse(localStorage.getItem("isLoggedIn")) || false
    );
    const [modalOpen, setModalOpen] = useState(false);
    const dropdownRef = useRef(null);
    const modalRef = useRef(null);
    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown if clicked outside
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
            // Close modal if clicked outside
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSignUp = () => {
        setIsLoggedIn(true);
    };

    const handleCart = () => {
        navigate("/shoppingcart");
    };

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleUserSignIn = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setDropdownOpen(false);
        setTimeout(() => {
            navigate("/signup");
        }, 100); // Delay navigation to ensure state update
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <header className="header-wrapper">
            <div className="header-top">
                <div onClick={handleLogoClick} className="logo-header">
                    <img src={LogoImg} alt="Logo" />
                </div>
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
                            ref={dropdownRef}
                        >
                            <img src={User} alt="User" />
                            <div>Username</div>
                            {dropdownOpen ? (
                                <IoIosArrowUp />
                            ) : (
                                <IoIosArrowDown />
                            )}
                            {dropdownOpen && (
                                <div className="user-dropdown-menu">
                                    <div className="user-dropdown-container">
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
                                            onClick={() =>
                                                navigate("/myorders")
                                            }
                                        >
                                            <BsStack className="dropdown-icon" />
                                            Orders
                                        </div>
                                        <div
                                            className="user-dropdown-item"
                                            onClick={() =>
                                                navigate("/wishlist")
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                className="dropdown-icon"
                                            />
                                            Wishlist
                                        </div>
                                        <div
                                            className="user-dropdown-item"
                                            onClick={handleLogout}
                                        >
                                            <TbLogout2 className="dropdown-icon" />
                                            Logout
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="hamburger-menu" onClick={toggleModal}>
                    {modalOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {modalOpen && (
                <div className="mobile-modal" ref={modalRef}>
                    <div className="modalmodal-content">
                        {!isLoggedIn ? (
                            <div onClick={handleSignUp} className="header-login">
                                <img src={User} alt="User" />
                                <div>Sign Up/Sign In</div>
                            </div>
                        ) : (
                            <div
                                className="header-User-Signin"
                                onClick={handleUserSignIn}
                                ref={dropdownRef}
                            >
                                <img src={User} alt="User" />
                                <div>Username</div>
                                {dropdownOpen ? (
                                    <IoIosArrowUp />
                                ) : (
                                    <IoIosArrowDown />
                                )}
                                {dropdownOpen && (
                                    <div className="modaluser-dropdown-menu">
                                        <div className="modaluser-dropdown-container">
                                            <div
                                                className="modaluser-dropdown-item"
                                                onClick={() =>
                                                    navigate("/profile")
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                    className="modaldropdown-icon"
                                                />
                                                My Profile
                                            </div>
                                            <div
                                                className="modaluser-dropdown-item"
                                                onClick={() =>
                                                    navigate("/myorders")
                                                }
                                            >
                                                <BsStack className="modaldropdown-icon" />
                                                Orders
                                            </div>
                                            <div
                                                className="modaluser-dropdown-item"
                                                onClick={() =>
                                                    navigate("/wishlist")
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    className="modaldropdown-icon"
                                                />
                                                Wishlist
                                            </div>
                                            <div
                                                className="modaluser-dropdown-item"
                                                onClick={handleLogout}
                                            >
                                                <TbLogout2 className="modaldropdown-icon" />
                                                Logout
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
