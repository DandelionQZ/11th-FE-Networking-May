import React, { useState } from 'react';
import './ContentPage.css';
import MainWeather from '../components/main/MainWeather';
import HourlyWeather from '../components/hourly/HourlyWeather';
import WeeklyWeather from '../components/weekly/WeeklyWeather';
import LocationEmpty from '../components/main/LocationEmpty';
import { getTodayWeather } from '../api/weatherApi';
import { useQuery } from '@tanstack/react-query';

const ContentPage: React.FC = () => {
  const lat = 100;
  const lon = 999;

  const { data, error, isSuccess } = useQuery({
    queryKey: ['todayWeather'],
    queryFn: () => getTodayWeather(lat, lon),
  });

  if (isSuccess) {
    console.log('tanstack query todayWeather: ', data);
  }

  if (error) {
    console.log('error: ', error);
  }

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
