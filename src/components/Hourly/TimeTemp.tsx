import React from 'react';
import './TimeTemp.css';
import NightClouds from '../../assets/NightClouds.svg';
import type { hourlyTimeTemp } from '../../types.ts';

interface TimeTempProps {
  timeTemp: hourlyTimeTemp;
}

const TimeTemp: React.FC<TimeTempProps> = ({ timeTemp }) => {
  return (
    <div className='time-temp'>
      <img src={NightClouds} alt='NightClouds' />
      <div className='time-temp time'>{timeTemp.time}시</div>
      <div className='time-temp temp'>{timeTemp.temp}º</div>
    </div>
  );
};

export default TimeTemp;
