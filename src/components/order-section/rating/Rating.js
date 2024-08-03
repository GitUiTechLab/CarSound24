import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Header from '../../header-section/Header';
import SubHeader from '../../header-section/SubHeader';
import Footer from '../../footer-section/Footer';
import './Rating.css';

function Rating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log({ rating, title, description });
    };

    return (
        <div className="rating-conatiner">
            <Header styleNavbar={"new-navbar"} />
            <SubHeader styleHeader={"new-sub-header"} />
            <div className="review-form-container">
                <h2>Rate this Product</h2>
                <div className="stars">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <FontAwesomeIcon size="2xl" icon={faStar} />
                            </button>
                        );
                    })}
                </div>
                <h2>Review this Product</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Rating;
