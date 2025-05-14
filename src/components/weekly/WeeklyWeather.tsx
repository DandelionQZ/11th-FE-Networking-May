import React from 'react';
import './WeeklyWeather.css';
import AllDay from './AllDay';
import { weeklyData } from '../../weather';
import ContentTitle from '../ContentTitle';

const WeeklyWeather: React.FC = () => {
  return (
    <div className='weekly-weather-container'>
      <ContentTitle text='주간 예보' />

      <div className='weekly-weather-content'>
        {weeklyData.map((day) => (
          <AllDay day={day} key={day.yyyymmdd} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeather;
