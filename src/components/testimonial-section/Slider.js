import React, { useState } from "react";
import PrevArrow from "../../assets/prev-arrow.png";
import NextArrow from "../../assets/next-arrow.png";
import "./Testimonial.css";

const Slider = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const renderStars = (rating) => {
        let stars = "";
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? "★" : "☆";
        }
        return stars;
    };

    return (
        <div className="slider-container">
            <button className="slider-button" onClick={prevSlide}>
                <img src={PrevArrow} alt="Previous Arrow" />
            </button>
            <div className="testimonial-card-container">
                {[0, 1].map((offset) => {
                    const index = (currentIndex + offset) % testimonials.length;
                    const testimonial = testimonials[index];
                    return (
                        <div
                            key={index}
                            className={`testimonial-card ${
                                offset === 1 ? "hide-on-mobile" : ""
                            }`}
                        >
                            <div className="cardHeader">
                                <div className="profileContainer">
                                    <div className="profileDetails">
                                        <h3 className="name-role">
                                            {testimonial.name}
                                        </h3>
                                        <p className="position-role">
                                            {testimonial.position}
                                        </p>
                                        <div className="stars-role">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className="profileImage"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                            </div>
                            <p className="cardText">{testimonial.text}</p>
                        </div>
                    );
                })}
            </div>
            <button className="slider-button" onClick={nextSlide}>
                <img src={NextArrow} alt="Next Arrow" />
            </button>
        </div>
    );
};

export default Slider;
