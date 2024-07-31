import React from 'react';
import '../../css/Homepage.css';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="form-group">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <textarea placeholder="Tell us your situation"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
