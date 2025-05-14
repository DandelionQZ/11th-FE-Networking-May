import React from 'react';
import DayRain from '../../assets/DayRain.svg';
import './HalfDay.css';

const HalfDay: React.FC = () => {
  return (
    <div className='half-day'>
      <img src={DayRain} alt='DayRain' />
      <div className='half-day-rain'>10%</div>
      <div className='half-day-meridiem'>오전</div>
      <div className='half-day-temp'>8º</div>
    </div>
  );
};

export default HalfDay;
