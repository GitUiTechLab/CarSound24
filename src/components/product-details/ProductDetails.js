import React from "react";
import ProductCard from "../product-section/ProductCard";
import Header from "../header-section/Header";
import SubHeader from "../header-section/SubHeader";
import Footer from "../footer-section/Footer";
import ProductImage from "./ProductImage";
import ProdDetails from "./ProdDetails";
import products from "../product-section/ProductData";
import "./ProductDetails.css";
import RatingsAndReviews from "./RatingsAndReviews";
import Review from "./Review";

const productData = {
    images: [
        "/assets/Prodd-1.jpeg",
        "/assets/Prodd-2.jpeg",
        "/assets/prodd-3.jpeg",
    ],
    name: "Blaupunkt GTb 8200 A",
    description:
        "Lorem ipsum dolor sit amet consectetur. Metus leo tincidunt neque lectus dui consectetur scelerisque nec ultricies. Facilisi orci tincidunt leo lacus est. Et interdum porta diam nec lorem ultrices senectus ac. Sed enim venenatis felis porttitor interdum.",
    rating: 4.5,
    reviews: 148,
    originalPrice: "₹49,990.00",
    discountedPrice: "₹47,490.00",
    generalSpecifications: [
        "Lorem ipsum dolor sit amet consectetur. Pulvinar amet eu ultricies vestibulum ipsum velit lacus amet.",
        "Lorem ipsum dolor sit amet consectetur. Pulvinar amet eu ultricies vestibulum ipsum velit lacus amet.",
        "Lorem ipsum dolor sit amet consectetur. Pulvinar amet eu ultricies vestibulum ipsum velit lacus amet.",
    ],
};

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
