import React, { useState } from "react";
import "../../css/Homepage.css";
import DownArrow from "../DownArrow";
import Call from "../../assets/call.png";
import SideArrow from "../../assets/arrow.png";

function HeroSection() {
    const [arrowDirection, setArrowDirection] = useState("down");

    const handleArrowClick = () => {
        if (arrowDirection === "down") {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            setArrowDirection("up");
        } else {
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
                        <button className="contact-button">
                            <img src={Call} alt="Call" />
                            Contact Us
                        </button>
                        <button className="shop-button">
                            Shop Now
                            <img src={SideArrow} alt="SideArrow" />
                        </button>
                    </div>
                </div>
                <DownArrow
                    direction={arrowDirection}
                    onClick={handleArrowClick}
                />
            </div>
        </div>
    );
}

export default HeroSection;
