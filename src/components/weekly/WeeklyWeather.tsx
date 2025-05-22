import React from 'react';
import './WeeklyWeather.css';
import AllDay from './AllDay';
import ContentTitle from '../ContentTitle';
import { useWeatherStore } from '../../store/weatherStore';
import { useShallow } from 'zustand/shallow';

const WeeklyWeather: React.FC = () => {
  const { daily } = useWeatherStore(
    useShallow((state) => ({
      daily: state.daily,
    }))
  );

  return (
    <div className='weekly-weather-container'>
      <ContentTitle text='주간 예보' />

      <div className='weekly-weather-content'>
        {daily.map((day) => (
          <AllDay day={day} key={day.date} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeather;
