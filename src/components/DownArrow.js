import React from 'react'
import '../components/Banner-section/HeroSection.css';
import Downarrow from '../assets/downarrow.png';

function DownArrow({ direction, onClick }) {
  return (
    <div className={`down-arrow ${direction}`} onClick={onClick}>
      <img src={Downarrow} alt='DownArrow' />
    </div>
  );
}

export default DownArrow;