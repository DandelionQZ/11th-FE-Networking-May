import React from 'react';
import { hourlyData } from '../../hourly';
import TimeTemp from './TimeTemp';
import './TimeTempList.css';

const TimeTempList: React.FC = () => {
  return (
    <div className='time-temp-list'>
      {hourlyData.map((h) => (
        <TimeTemp key={h.time} />
      ))}
    </div>
  );
};

export default TimeTempList;
