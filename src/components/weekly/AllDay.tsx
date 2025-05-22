import React from 'react';
import HalfDay from './HalfDay';
import './AllDay.css';
import type { weeklyDay } from '../../types';
import {
  formatToShortDate,
  getDayOfWeek,
  getTodayString,
} from '../../utils/formatDate';
import { getWeatherIcon } from '../../utils/formatIcon';

interface AllDayProps {
  day: weeklyDay;
}

const AllDay: React.FC<AllDayProps> = ({ day }) => {
  const isToday = day.date === getTodayString();
  const weekdayLabel = isToday ? '오늘' : getDayOfWeek(day.date);

  return (
    <div className='all-day'>
      <img src={getWeatherIcon(day.weather.icon)} alt={day.weather.icon} />
      <div className='half-day-set'>
        <HalfDay
          // rain={day.dayRainPer}
          temp={day.morningTemp}
          m='오전'
          c='#32A1FF'
        />
        <HalfDay
          // rain={day.nightRainPer}
          temp={day.afternoonTemp}
          m='오후'
          c='#FF3232'
        />
      </div>
      <div className='day-and-date'>
        <div className='day-and-date day'>{weekdayLabel}</div>
        <div className='day-and-date date'>{formatToShortDate(day.date)}</div>
      </div>
    </div>
  );
};

export default AllDay;
