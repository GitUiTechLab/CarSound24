import React from 'react';
import '../../css/Homepage.css';
import Slider from './Slider';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';

const testimonials = [
  {
    name: "William Anderson",
    position: "CEO, ABC",
    image: user1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    name: "Jane Cooper",
    position: "CEO, ABC",
    image: user2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
  {
    name: "Robert Williams",
    position: "CEO, ABC",
    image: user1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    name: "Adam John",
    position: "CEO, ABC",
    image: user2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
  {
    name: "Ravi Ranjan",
    position: "CEO, ABC",
    image: user1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    name: "Utkarsh Anand",
    position: "CEO, ABC",
    image: user2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
  {
    name: "Sarthak Puri",
    position: "CEO, ABC",
    image: user1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
  {
    name: "Jay Kumar",
    position: "CEO, ABC",
    image: user2,
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
