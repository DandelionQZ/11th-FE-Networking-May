import React from 'react';
import './TimeTemp.css';
import NightClouds from '../../assets/NightClouds.svg';

const TimeTemp: React.FC = () => {
  return (
    <div className='time-temp'>
      <img src={NightClouds} alt='NightClouds' />
      <div className='time-temp time'>03시</div>
      <div className='time-temp temp'>8º</div>
    </div>
  );
};

export default TimeTemp;
