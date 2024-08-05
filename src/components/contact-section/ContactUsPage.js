import React from 'react';
import Header from '../header-section/Header';
import SubHeader from '../header-section/SubHeader';
import Contact from './Contact';
import Footer from '../footer-section/Footer';
import './Contact.css';

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
