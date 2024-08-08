import React from 'react';
import Header from '../../header-section/Header';
import SubHeader from '../../header-section/SubHeader';
import Footer from '../../footer-section/Footer';
import './Order.css';

function MyOrders() {
  return (
    <div>
        <Header styleNavbar={"myorders-header"} />
        <SubHeader styleHeader={"myorders-subheader"} />
        <div className='myorders-container'>
            <div className='myorders-head'>
                <div className='myorders-title'>My Orders</div>
                <div className='order-total'>Order Total: <span>{}</span></div>
            </div>
            <div className='myorders-card-container'>

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default MyOrders