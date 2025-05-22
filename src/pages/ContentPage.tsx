import React, { useEffect, useState } from 'react';
import './ContentPage.css';
import MainWeather from '../components/main/MainWeather';
import HourlyWeather from '../components/hourly/HourlyWeather';
import WeeklyWeather from '../components/weekly/WeeklyWeather';
import LocationEmpty from '../components/main/LocationEmpty';
import { getTodayWeather } from '../apis/weather';
import { useQuery } from '@tanstack/react-query';
import { useWeatherStore } from '../store/weatherStore';
import { useShallow } from 'zustand/shallow';

const ContentPage: React.FC = () => {
  const lat = 37;
  const lon = 127;

  const { setCurrent, setHourly, setDaily } = useWeatherStore(
    useShallow((state) => ({
      setCurrent: state.setCurrent,
      setHourly: state.setHourly,
      setDaily: state.setDaily,
    }))
  );

  const { data, error } = useQuery({
    queryKey: ['todayWeather'],
    queryFn: async () => {
      const data = await getTodayWeather(lat, lon);
      if (!data) throw new Error('No data received from weather API');
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setCurrent(data.current);
      setHourly(data.hourly);
      setDaily(data.daily);
    }
  }, [data, setCurrent, setHourly, setDaily]);

  if (error) {
    console.log('getTodayWeather api 호출 에러: ', error);
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
