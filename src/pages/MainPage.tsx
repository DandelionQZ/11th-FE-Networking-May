import React from 'react';
import './MainPage.css';
import MainWeather from '../components/main/MainWeather';
import HourlyWeather from '../components/hourly/HourlyWeather';
import WeeklyWeather from '../components/weekly/WeeklyWeather';

const MainPage: React.FC = () => {
  return (
    <div className='main-page'>
      <MainWeather />
      <HourlyWeather />
      <WeeklyWeather />
    </div>
  );
};

export default MainPage;
