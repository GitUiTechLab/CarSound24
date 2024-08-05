import React from 'react'
import './EmptyCart.css';
import Header from '../../header-section/Header';
import SubHeader from '../../header-section/SubHeader';
import Footer from '../../footer-section/Footer';
import emptyCart from '../../../assets/emptyCart.png';
import Contact from '../../contact-section/Contact';

function EmptyCart() {
  return (
    <div className='emptycart-container'>
        <Header />
        <SubHeader styleHeader={"cart-subhaeder"} />

        <div className='emptycart'>
            <div className='emptycart-head'>Cart</div>
            <div className='emptycart-content'>
                <img src={emptyCart} alt='Empty Cart' />
                <div>
                    <h2>Your Cart is Empty!</h2>
                    <p>Looks like you haven’t added anything to your cart yet. Browse our collection of premium car infotainment systems and find the perfect upgrade for your ride.</p>
                </div>
                <div>
                    <button>Start Shoping</button>
                </div>
            </div>
        </div>
        <Contact />
        <Footer />    
    </div>
  )
}

export default EmptyCart