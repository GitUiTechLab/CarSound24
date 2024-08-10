import React from "react";
import "./Contact.css";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import Underline from "../../assets/underline.png";

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-head">
                <h2>
                    Contact <span>Us</span>
                </h2>
                <img src={Underline} alt="Underline" className="contact-underline" />
            </div>
            <div className="contact-content">
                <ContactMap />
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;
