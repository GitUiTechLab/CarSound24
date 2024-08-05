import React, { useState } from "react";
import PrevArrow from "../../assets/prev-arrow.png";
import NextArrow from "../../assets/next-arrow.png";
import "./Testimonial.css";

const Slider = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 2 + testimonials.length) % testimonials.length
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
                <div className="testimonial-card">
                    <div className="cardHeader">
                        <div className="profileContainer">
                            <div className="profileDetails">
                                <h3 className="name-role">
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p className="position-role">
                                    {testimonials[currentIndex].position}
                                </p>
                                <div className="stars-role">
                                    {renderStars(
                                        testimonials[currentIndex].rating
                                    )}
                                </div>
                            </div>
                        </div>
                        <img
                            className="profileImage"
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                        />
                    </div>
                    <p className="cardText">
                        {testimonials[currentIndex].text}
                    </p>
                </div>
                <div className="testimonial-card">
                    <div className="cardHeader">
                        <div className="profileContainer">
                            <div className="profileDetails">
                                <h3 className="name-role">
                                    {
                                        testimonials[
                                            (currentIndex + 1) % testimonials.length
                                        ].name
                                    }
                                </h3>
                                <p className="position-role">
                                    {
                                        testimonials[
                                            (currentIndex + 1) % testimonials.length
                                        ].position
                                    }
                                </p>
                                <div className="stars-role">
                                    {renderStars(
                                        testimonials[
                                            (currentIndex + 1) % testimonials.length
                                        ].rating
                                    )}
                                </div>
                            </div>
                        </div>
                        <img
                            className="profileImage"
                            src={
                                testimonials[
                                    (currentIndex + 1) % testimonials.length
                                ].image
                            }
                            alt={
                                testimonials[
                                    (currentIndex + 1) % testimonials.length
                                ].name
                            }
                        />
                    </div>
                    <p className="cardText">
                        {
                            testimonials[
                                (currentIndex + 1) % testimonials.length
                            ].text
                        }
                    </p>
                </div>
            </div>
            <button className="slider-button" onClick={nextSlide}>
                <img src={NextArrow} alt="Next Arrow" />
            </button>
        </div>
    );
};

export default Slider;
