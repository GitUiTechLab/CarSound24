import React, { useState, useEffect, useRef } from 'react';
import "./App.css";
import "@fontsource/lato";
import About from "./components/about-section/About";
import Footer from "./components/footer-section/Footer";
import Header from "./components/header-section/Header";
import Product from "./components/product-section/Product";
import Contact from "./components/contact-section/Contact";
import Category from "./components/category-section/Category";
import SubHeader from "./components/header-section/SubHeader";
import HeroSection from "./components/Banner-section/HeroSection";
import TestimonialSection from './components/testimonial-section/TestimonialSection';

function Main() {
  const [isScrolled, setIsScrolled] = useState(false);
  const footerRef = useRef(null);

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
      <HeroSection footerRef={footerRef} />
      <Category />
      <About />
      <Product />
      <TestimonialSection />
      <Contact />
      <Footer ref={footerRef} />
    </div>
  );
}

export default Main;
