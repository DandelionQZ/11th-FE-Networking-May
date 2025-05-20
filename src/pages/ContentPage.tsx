import React, { useState } from 'react';
import './ContentPage.css';
import MainWeather from '../components/main/MainWeather';
import HourlyWeather from '../components/hourly/HourlyWeather';
import WeeklyWeather from '../components/weekly/WeeklyWeather';
import LocationEmpty from '../components/main/LocationEmpty';

const ContentPage: React.FC = () => {
  const [isSelected] = useState<boolean>(true);

  const display = () => {
    if (isSelected) {
      return (
        <>
          <MainWeather />
          <HourlyWeather />
          <WeeklyWeather />
        </>
      );
    }
    return <LocationEmpty />;
  };

  return <div className='main-page'>{display()}</div>;
};

export default ContentPage;
