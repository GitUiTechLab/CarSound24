import React from "react";
import {
    FaThumbsUp,
    FaThumbsDown,
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
} from "react-icons/fa";
import "./ProductDetails.css";

const Review = ({ review }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(review.rating)) {
                stars.push(<FaStar key={i} className="filled-star" />);
            } else if (
                i === Math.ceil(review.rating) &&
                review.rating % 1 !== 0
            ) {
                stars.push(<FaStarHalfAlt key={i} className="filled-star" />);
            } else {
                stars.push(<FaRegStar key={i} className="empty-star" />);
            }
        }
        return stars;
    };

    return (
        <div className="review">
            <div className="review-header">
                <div className="avatar-container">
                    <img src={review.avatar} alt="Avatar" className="avatar" />
                    <div className="review-info">
                        <div className="reviewer-name">{review.name}</div>
                        <div className="review-rating">{renderStars()}</div>
                    </div>
                </div>
                <div className="review-footer">
                    <div className="review-likes">
                        <FaThumbsUp /> {review.likes}
                    </div>
                    <div className="review-dislikes">
                        <FaThumbsDown /> {review.dislikes}
                    </div>
                </div>
            </div>
            <div className="review-body">{review.text}</div>
        </div>
    );
};

export default Review;
