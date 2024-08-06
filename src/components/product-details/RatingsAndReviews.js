import React from "react";
import "./ProductDetails.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const RatingsAndReviews = ({ rating, totalRatings, ratingDistribution }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<i key={i} className="fas fa-star"></i>);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
            } else {
                stars.push(<i key={i} className="far fa-star"></i>);
            }
        }
        return stars;
    };

    return (
        <div className="ratings-and-reviews">
            <div className="rating-summary">
                <div className="rating-value">{rating.toFixed(1)}</div>
                <div className="rating-stars">
                    {renderStars()}
                </div>
                <div className="total-ratings">{totalRatings.toLocaleString()}</div>
            </div>
            <div className="rating-distribution">
                {Object.keys(ratingDistribution).reverse().map((key) => (
                    <div key={key} className="rating-bar">
                        <span>{key}</span>
                        <div className="bar">
                            <div className="fill" style={{ width: `${(ratingDistribution[key] / totalRatings) * 100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatingsAndReviews;
