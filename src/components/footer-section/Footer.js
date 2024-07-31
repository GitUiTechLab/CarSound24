import React from "react";
import "../../css/Homepage.css";
import Logo from "../../assets/logo.png";
import Call from "../../assets/call.png";
import Mail from "../../assets/mail.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <img src={Logo} alt="Car Sound 24" className="logo" />
                    <h2>About CAR SOUND 24</h2>
                    <p>
                        Your ultimate destination for premium car infotainment
                        systems. Explore our wide range of top-quality car
                        stereos, speakers, navigation systems, and more.
                        Experience the best in car audio and entertainment with
                        unbeatable prices and exceptional customer service.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h3>Categories</h3>
                    <ul>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h3>Other Useful Links</h3>
                    <ul>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Follow Us On</h3>
                    <div className="socials">
                        <a href="#">
                            <img src={Instagram} alt="" />
                        </a>
                        <a href="#">
                            <img src={Facebook} alt="" />
                        </a>
                    </div>
                    <p>
                        <img src={Call} alt="" /> (252) 555-0126
                    </p>
                    <p>
                        <img src={Mail} alt="" />
                        alma.lawson@example.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
