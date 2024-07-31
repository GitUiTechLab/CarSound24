import React from 'react'
import '../../css/Homepage.css';
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <ContactMap />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact