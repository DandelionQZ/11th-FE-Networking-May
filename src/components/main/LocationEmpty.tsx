import React from 'react';
import dayClouds from '../../assets/dayClouds.svg';
import './NoLocation.css';

const LocationEmpty: React.FC = () => {
  return (
    <div className='no-location-container'>
      <img className='no-location-image' src={dayClouds} alt='dayClouds' />
      <div className='no-location-text'>아직 선택된 위치가 없습니다!</div>
    </div>
  );
};

export default LocationEmpty;
