import React from 'react';
import Header from '../../header-section/Header';
import SubHeader from '../../header-section/SubHeader';
import { useNavigate } from "react-router-dom";
import Footer from '../../footer-section/Footer';
import image1 from '../../../assets/cat-1.jpeg';
import image2 from '../../../assets/cat-2.jpeg';
import image3 from '../../../assets/cat-3.jpeg';
import { FaStar } from "react-icons/fa6";
import './Order.css';

function MyOrders() {
  const orders = [
    {
      id: 1,
      name: 'Blaupunkt Key Largo 980 - 25.55cm - 10.1inches',
      price: '₹ 47,490.00',
      originalPrice: '₹ 49,990.00',
      deliveryDate: '21 July, 2024',
      image: image1,
      delivered: false,
    },
    {
      id: 2,
      name: 'Blaupunkt Key Largo 980 - 25.55cm - 10.1inches',
      price: '₹ 47,490.00',
      originalPrice: '₹ 49,990.00',
      deliveryDate: '21 July, 2024',
      image: image2,
      delivered: false,
    },
    {
      id: 3,
      name: 'Blaupunkt Key Largo 980 - 25.55cm - 10.1inches',
      price: '₹ 47,490.00',
      originalPrice: '₹ 49,990.00',
      deliveryDate: '21 July, 2024',
      image: image3,
      delivered: true,
    },
  ];

  const calculateOrderTotal = () => {
    return orders.reduce((total, order) => total + parseFloat(order.price.replace(/[^0-9.-]+/g, "")), 0);
  };

  const navigate = useNavigate();

  const handleRate = () => {
    navigate("/rating");
  };

  return (
    <div>
        <Header styleNavbar={"myorders-header"} />
        <SubHeader styleHeader={"myorders-subheader"} />
        <div className='myorders-container'>
            <div className='myorders-head'>
                <div className='myorders-title'>My Orders</div>
                <div className='order-total'>Order Total: <span>₹ {calculateOrderTotal().toFixed(2)}</span></div>
            </div>
            <div className='myorders-card-container'>
                {orders.map(order => (
                    <div key={order.id} className='order-card'>
                        <img src={order.image} alt={order.name} className='order-image' />
                        <div className='order-details'>
                            <div className='order-info'>
                                <div className='order-name'>{order.name}</div>
                                <div className='order-price'>
                                    <span className='current-price'>{order.price}</span>
                                    <span className='original-price'>{order.originalPrice}</span>
                                </div>
                            </div>
                            <div className='order-actions'>
                            <div className='order-delivery'>
                                    {order.delivered ? (
                                        <>
                                            Delivered On <span className='delivery-date'>{order.deliveryDate}</span>
                                        </>
                                    ) : (
                                        <>
                                            Delivery Expected By <span className='delivery-date'>{order.deliveryDate}</span>
                                        </>
                                    )}
                                </div>
                                <button className='view-order-details'>View Order Details</button>
                                {order.delivered && (
                                    <button onClick={handleRate} className='rate-product'><FaStar />Rate Product</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default MyOrders;
