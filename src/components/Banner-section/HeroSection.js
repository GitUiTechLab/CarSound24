import React, { useState } from "react";
import DownArrow from "../DownArrow";
import Call from "../../assets/call.png";
import SideArrow from "../../assets/arrow.png";
import { useNavigate } from "react-router-dom";
import "../../css/Homepage.css";

function HeroSection({ footerRef }) {
    const [arrowDirection, setArrowDirection] = useState("down");
    const navigate = useNavigate();

    const handleWishlist = () => {
        navigate("/wishlist");
    };

    const handleContactUs = () => {
        navigate("/contactus");
    };

    const handleArrowClick = () => {
        if (arrowDirection === "down") {
            // Scroll to the footer
            footerRef.current.scrollIntoView({ behavior: "smooth" });
            setArrowDirection("up");
        } else {
            // Scroll back to the top
            window.scrollTo({ top: 0, behavior: "smooth" });
            setArrowDirection("down");
        }
    };

    return (
        <div className="App">
            <div className="hero-section">
                <div className="content-section">
                    <h1 className="head1">The Sound You Crave, The Selection You Deserve</h1>
                    <p className="para1">
                        Explore our extensive range of car audio & infotainment
                        systems at Car Sound 24. Find the perfect upgrade for
                        any car.
                    </p>
                    <div className="banner-btn">
                        <button onClick={handleContactUs} className="contact-button">
                            <img src={Call} alt="Call" />
                            Contact Us
                        </button>
                        <button onClick={handleWishlist} className="shop-button">
                            Shop Now
                            <img src={SideArrow} alt="SideArrow" />
                        </button>
                    </div>
                </div>
                <DownArrow
                    direction="down"
                    onClick={handleArrowClick}
                />
            </div>
        </div>
    );
}

export default HeroSection;
