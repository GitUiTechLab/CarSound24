import React from "react";
import "./ProductDetails.css";
import Review from "./Review";
import ProdDetails from "./ProdDetails";
import ProductImage from "./ProductImage";
import Header from "../header-section/Header";
import Footer from "../footer-section/Footer";
import ProdData from "../product-details/ProdData";
import SubHeader from "../header-section/SubHeader";
import RatingsAndReviews from "./RatingsAndReviews";
import products from "../product-section/ProductData";
import ProductCard from "../product-section/ProductCard";

const productData = ProdData[0];

const rating = 4.5;
const totalRatings = 2256896;
const ratingDistribution = {
    5: 1800000,
    4: 300000,
    3: 100000,
    2: 50000,
    1: 50000,
};

const reviews = [
    {
        name: "Darlene Robertson",
        avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet consectetur. Vestibulum habitasse enim ullamcorper sem in ultrices eget convallis. Duis faucibus feugiat adipiscing enim faucibus a vitae lacinia id. Tincidunt est vitae vel sollicitudin.",
        likes: 234,
        dislikes: 23,
    },
    {
        name: "Darlene Robertson",
        avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet consectetur. Vestibulum habitasse enim ullamcorper sem in ultrices eget convallis. Duis faucibus feugiat adipiscing enim faucibus a vitae lacinia id. Tincidunt est vitae vel sollicitudin.",
        likes: 234,
        dislikes: 23,
    },
    {
        name: "Darlene Robertson",
        avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet consectetur. Vestibulum habitasse enim ullamcorper sem in ultrices eget convallis. Duis faucibus feugiat adipiscing enim faucibus a vitae lacinia id. Tincidunt est vitae vel sollicitudin.",
        likes: 234,
        dislikes: 23,
    },

    // Add more review objects as needed
];

function ProductDetails() {
    return (
        <div>
            <Header />
            <SubHeader styleHeader={"productdetails-subheader"} />
            <div className="product-main-section">
                <ProductImage images={productData.images} />
                <ProdDetails product={productData} />
            </div>
            <div className="related-product-container">
                <div className="rp-head">Related Products</div>
                <div className="related-product-list">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="ratenreview-container">
                <div className="rnr-head">Ratings And Reviews</div>
                <RatingsAndReviews
                    rating={rating}
                    totalRatings={totalRatings}
                    ratingDistribution={ratingDistribution}
                />
            </div>
            <div className="reviews-container">
                <div className="rs-head">Reviews</div>
                {reviews.map((review, index) => (
                    <Review key={index} review={review} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetails;
