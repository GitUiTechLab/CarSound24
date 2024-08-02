import React from 'react'
import Header from '../header-section/Header'
import SubHeader from '../header-section/SubHeader'
import Contact from './Contact'
import Footer from '../footer-section/Footer'
import './Contact.css';

function ContactUsPage() {
    
  return (
    <div className="contactus-page-conatiner">
        <Header />
        <SubHeader styleHeader={"new-sub-header"} />
        <div className="contactus-page">
            <Contact />
        </div>
        <Footer />
    </div>
  )
}

export default ContactUsPage