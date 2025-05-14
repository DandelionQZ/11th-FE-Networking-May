import React from 'react';
import './WeeklyWeather.css';
import AllDay from './AllDay';
import { weeklyData } from '../../weather';

const WeeklyWeather: React.FC = () => {
  return (
    <div className='weekly-weather-container'>
      {/* ContentTitle 컴포넌트 추가 */}

      <div className='weekly-weather-content'>
        {weeklyData.map((day) => (
          <AllDay key={day.yyyymmdd} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeather;
