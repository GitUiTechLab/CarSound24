import React, { useState } from 'react';
import '../../css/Homepage.css';

const Slider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? '★' : '☆';
    }
    return stars;
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={prevSlide}>&lt;</button>
      <div className="testimonial-card-container">
        <div className="testimonial-card">
          <div className="card-header">
            <img className="profile-image" src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
            <h3 className="name">{testimonials[currentIndex].name}</h3>
            <p className="position">{testimonials[currentIndex].position}</p>
            <div className="stars">{renderStars(testimonials[currentIndex].rating)}</div>
          </div>
          <p className="card-text">{testimonials[currentIndex].text}</p>
        </div>
        <div className="testimonial-card">
          <div className="card-header">
            <img className="profile-image" src={testimonials[(currentIndex + 1) % testimonials.length].image} alt={testimonials[(currentIndex + 1) % testimonials.length].name} />
            <h3 className="name">{testimonials[(currentIndex + 1) % testimonials.length].name}</h3>
            <p className="position">{testimonials[(currentIndex + 1) % testimonials.length].position}</p>
            <div className="stars">{renderStars(testimonials[(currentIndex + 1) % testimonials.length].rating)}</div>
          </div>
          <p className="card-text">{testimonials[(currentIndex + 1) % testimonials.length].text}</p>
        </div>
      </div>
      <button className="slider-button" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Slider;
