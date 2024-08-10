import React from 'react';
import './Contact.css';
import Contact from './Contact';
import Header from '../header-section/Header';
import Footer from '../footer-section/Footer';
import SubHeader from '../header-section/SubHeader';

function ContactUsPage() {
  return (
    <div className="contactus-page-container">
        <Header />
        <SubHeader styleHeader={"new-subheader"} />
        <div className="contactus-page">
            <Contact />
        </div>
        <Footer />
    </div>
  );
}

export default ContactUsPage;
