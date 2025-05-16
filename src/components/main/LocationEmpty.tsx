import React from 'react';
import Clouds from '../../assets/Clouds.svg';
import './LocationEmpty.css';

const LocationEmpty: React.FC = () => {
  return (
    <div className='no-location-container'>
      <img className='no-location-image' src={Clouds} alt='Clouds' />
      <div className='no-location-text'>아직 선택된 위치가 없습니다!</div>
    </div>
  );
};

export default LocationEmpty;
