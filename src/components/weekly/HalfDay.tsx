import React from 'react';
import DayRain from '../../assets/DayRain.svg';
import './HalfDay.css';

interface HalfDayProps {
  rain: number;
  temp: number;
}

const HalfDay: React.FC<HalfDayProps> = ({ rain, temp }) => {
  return (
    <div className='half-day'>
      <img src={DayRain} alt='DayRain' />
      <div className='half-day-rain'>{rain}%</div>
      <div className='half-day-meridiem'>오전</div>
      <div className='half-day-temp'>{temp}º</div>
    </div>
  );
};

export default HalfDay;
