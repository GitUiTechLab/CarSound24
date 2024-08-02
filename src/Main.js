import React, { useState, useEffect, useRef } from 'react';
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
