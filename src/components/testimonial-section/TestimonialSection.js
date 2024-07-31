import React from 'react';
import '../../css/Homepage.css';
import Slider from './Slider';

const testimonials = [
  {
    name: "William Anderson",
    position: "CEO, ABC",
    image: "path_to_william_image",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    name: "Jane Cooper",
    position: "CEO, ABC",
    image: "path_to_jane_image",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
  {
    name: "Robert Wiliams",
    position: "CEO, ABC",
    image: "path_to_william_image",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    name: "Adam Jhon",
    position: "CEO, ABC",
    image: "path_to_jane_image",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <h1>What Our Customers Say</h1>
      <Slider testimonials={testimonials} />
    </div>
  );
};

export default TestimonialSection;
