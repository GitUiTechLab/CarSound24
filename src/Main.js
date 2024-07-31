import React, { useState, useEffect } from 'react';
import "@fontsource/lato";
import "./App.css";
import Header from "./components/header-section/Header";
import SubHeader from "./components/header-section/SubHeader";
import HeroSection from "./components/Banner-section/HeroSection";
import Category from "./components/category-section/Category";
import About from "./components/about-section/About";
import Product from "./components/product-section/Product";
import Contact from "./components/contact-section/Contact";
import Footer from "./components/footer-section/Footer";
import Slider from './components/testimonial-section/Slider';
import TestimonialSection from './components/testimonial-section/TestimonialSection';

function Main() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <SubHeader isScrolled={isScrolled} />
      <HeroSection />
      <Category />
      <About />
      <Product />
      <TestimonialSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
