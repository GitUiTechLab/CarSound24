import React from 'react';
import './Order.css';
import { FaCheck } from "react-icons/fa";
import image1 from '../../../assets/cat-1.jpeg';
import Header from '../../header-section/Header';
import { MdOutlineCancel } from "react-icons/md";
import Footer from '../../footer-section/Footer';
import ChatImg from '../../../assets/whatsapp.png';
import SubHeader from '../../header-section/SubHeader';

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
      { status: 'Your Order has been placed.', date: 'Mon, 15th Jul', time: '8:50 pm' },
      { status: 'Seller has processed your order.', date: 'Mon, 15th Jul', time: '8:50 pm' },
      { status: 'Item has been dispatched', date: 'Mon, 15th Jul', time: '8:50 pm' },
    ],
  };

  const orderSummary = {
    price: '₹ 1902',
    discount: '₹ 485',
    gst: '₹ 12',
    delivery: '₹ 60',
    total: '₹ 2000',
  };

  const progressSteps = [
    { label: 'Order Received', completed: true },
    { label: 'Confirmed', completed: true },
    { label: 'Packed', completed: false },
    { label: 'On the Way', completed: false },
    { label: 'Delivered', completed: false },
    { label: 'Returned', completed: false },
  ];

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
            {progressSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`progress-step ${step.completed ? 'completed' : ''}`}>
                  <div className='progress-circle'>
                    {step.completed ? <FaCheck /> : (index + 1 < 10 ? `0${index + 1}` : index + 1)}
                  </div>
                  <div className='progress-label'>{step.label}</div>
                </div>
                {index < progressSteps.length - 1 && (
                  <div className={`progress-bar ${progressSteps[index + 1].completed ? 'completed' : ''}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className='order-query-container'>
            <button className='cancel-order'><MdOutlineCancel /> Cancel Order</button>
            <button className='chat'><img src={ChatImg} alt='Chat Icon' /> Chat</button>
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
