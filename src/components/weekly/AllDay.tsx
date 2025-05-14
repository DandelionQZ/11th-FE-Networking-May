import React from 'react';
import HalfDay from './HalfDay';
import './AllDay.css';
import type { weeklyDay } from '../../types';
import { DateToMonthDay } from '../../utils/formatDate';

interface AllDayProps {
  day: weeklyDay;
}

const AllDay: React.FC<AllDayProps> = ({ day }) => {
  return (
    <div className='all-day'>
      <div className='half-day-set'>
        <HalfDay rain={day.dayRainPer} temp={day.dayTemperature} />
        <HalfDay rain={day.nightRainPer} temp={day.nightTepmerature} />
      </div>
      <div className='day-and-date'>
        <div className='day-and-date day'>오늘</div>
        <div className='day-and-date date'>{DateToMonthDay(day.yyyymmdd)}</div>
      </div>
    </div>
  );
};

export default AllDay;
