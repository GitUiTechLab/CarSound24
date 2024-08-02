import React from "react";
import Underline from '../../assets/underline.png';
import Truck from '../../assets/truck.png';
import Badge from '../../assets/badge.png';
import UserStar from '../../assets/userstar.png';
import HelpDesk from '../../assets/helpdesk.png';

function About() {
    return (
        <div className="why-choose-us">
            <h2>
                Why Choose <span>Us</span>
            </h2>
            <img
                src={Underline}
                alt="Underline"
                className="about-underline"
            />
            <div className="benefits">
                {/* <div className="benifit-wrapper" ></div> */}
                <div className="benefit-item">
                    <img
                        src={Truck}
                        alt="Fast Delivery"
                    />
                    <p>Fast Delivery</p>
                </div>
                <div className="benefit-item">
                    <img
                        src={Badge}
                        alt="Top-Quality Products"
                    />
                    <p>Top-Quality Products</p>
                </div>
                <div className="benefit-item">
                    <img
                        src={UserStar}
                        alt="Satisfaction Guaranteed"
                    />
                    <p>Satisfaction Guaranteed</p>
                </div>
                <div className="benefit-item">
                    <img
                        src={HelpDesk}
                        alt="Unmatched Support"
                    />
                    <p>Unmatched Support</p>
                </div>
            </div>
        </div>
    );
}

export default About;
