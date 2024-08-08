import React from 'react';
import './Order.css';
import Footer from '../../footer-section/Footer';
import SubHeader from '../../header-section/SubHeader';
import Header from '../../header-section/Header';
import image1 from '../../../assets/cat-1.jpeg';

function OrderDetails() {
  const order = {
    id: 1,
    name: 'Blaupunkt Key Largo 980 - 25.55cm - 10.1inches',
    price: '₹ 47,490.00',
    originalPrice: '₹ 49,990.00',
    deliveryDate: '21 July, 2024',
    image: image1,
    delivered: false,
    orderStatusHead: "Your item has been picked up by courier partner.",
    orderStatus: [
      { status: 'Order Received', date: 'Mon, 15th Jul', time: '8:50 pm' },
      { status: 'Confirmed', date: 'Mon, 15th Jul', time: '8:50 pm' },
      { status: 'Packed', date: 'Mon, 15th Jul', time: '8:50 pm' },
    ],
  };

  const orderSummary = {
    price: '₹ 1902',
    discount: '₹ 485',
    gst: '₹ 12',
    delivery: '₹ 60',
    total: '₹ 2000',
  };

  return (
    <div>
      <Header styleNavbar={"myorders-header"} />
      <SubHeader styleHeader={"myorders-subheader"} />
      <div className='orderdetails-container'>
        <div className='orderdetails-head'>
          <h2>Order Details</h2>
          <div className='orderdetails-delivery'>Delivery Expected By <span className='delivery-date'>{order.deliveryDate}</span></div>
        </div>
        <div className='orderdetails-body'>
          <div className='orderdetails-body-left'>
            <img src={order.image} alt={order.name} className='orderdetails-image' />
            <div className='orderdetails-info'>
              <div className='orderdetails-name'>{order.name}</div>
              <div className='orderdetails-price'>
                <span className='current-price'>{order.price}</span>
                <span className='original-price'>{order.originalPrice}</span>
              </div>
            </div>
          </div>
          <div className='orderdetails-body-right'>
            <h3>Order Summary</h3>
            <div className='order-summary'>
              <div className='summary-item'><span>Price</span><span>{orderSummary.price}</span></div>
              <div className='summary-item'><span>Discount</span><span>{orderSummary.discount}</span></div>
              <div className='summary-item'><span>GST</span><span>{orderSummary.gst}</span></div>
              <div className='summary-item'><span>Delivery</span><span>{orderSummary.delivery}</span></div>
              <div className='summary-item total'><span>Total</span><span>{orderSummary.total}</span></div>
            </div>
          </div>
        </div>
        <div className='orderprogress-container'>
          <div className='orderprogress'>
            {['Order Received', 'Confirmed', 'Packed', 'On the Way', 'Delivered', 'Returned'].map((status, index) => (
              <div key={index} className={`progress-step ${index < 3 ? 'completed' : ''}`}>
                <div className='progress-circle'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                <div className='progress-label'>{status}</div>
              </div>
            ))}
          </div>
          <div className='order-query-container'>
            <button className='cancel-order'>Cancel Order</button>
            <button className='chat'>Chat</button>
          </div>
        </div>
        <div className='order-status-container'>
          <h3>{order.orderStatusHead}</h3>
          {order.orderStatus.map((status, index) => (
            <div key={index} className='status-item'>
              <div>{status.date}</div>
              <div>{status.time}</div>
              <div>{status.status}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderDetails;
