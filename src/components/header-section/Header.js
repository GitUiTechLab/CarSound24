import React from "react";
import Call from "../../assets/call.png";
import Mail from "../../assets/mail.png";
import Cart from "../../assets/cart.png";
import User from "../../assets/user.png";
import { useNavigate } from "react-router-dom";
import "../header-section/Header.css";

function Header() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup");
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
                <div className="user-actions">
                    <div className="header-cart">
                        <img src={Cart} alt="Cart" />
                        <div>Cart</div>
                    </div>
                    <div onClick={handleSignUp} className="header-login">
                        <img src={User} alt="User" />
                        <div>Sign Up/Sign In</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
