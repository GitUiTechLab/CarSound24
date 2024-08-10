import React from 'react'
import Downarrow from '../assets/downarrow.png';
import '../components/Banner-section/HeroSection.css';

function DownArrow({ direction, onClick }) {
  return (
    <div className={`down-arrow ${direction}`} onClick={onClick}>
      <img src={Downarrow} alt='DownArrow' />
    </div>
  );
}

export default DownArrow;