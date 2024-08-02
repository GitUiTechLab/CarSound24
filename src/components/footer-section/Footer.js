import React from "react";
import "../../css/Homepage.css";
import Logo from "../../assets/logo.png";
import Call from "../../assets/call.png";
import Mail from "../../assets/mail.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";

const Footer = React.forwardRef((props, ref) => {
    return (
        <footer className="footer" ref={ref}>
            <div className="footer-content">
                <div className="footer-section about">
                    <img src={Logo} alt="Car Sound 24" className="logo" />
                    <h2>About <span>CAR SOUND 24</span></h2>
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
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h3>Other Useful Links</h3>
                    <ul>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <div className="cnt-head">Follow Us On</div>
                    <div className="cnt-socials">
                        <a href="#"><img src={Instagram} alt="Instagram" /></a>
                        <a href="#"><img src={Facebook} alt="Facebook" /></a>
                    </div>
                    <div className="cnt-phone">
                        <img src={Call} alt="Call" /> (252) 555-0126
                    </div>
                    <div className="cnt-mail">
                        <img src={Mail} alt="Mail" />
                        alma.lawson@example.com
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;
