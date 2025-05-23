import React, { useEffect } from 'react';
import './ContentPage.css';
import MainWeather from '../components/main/MainWeather';
import HourlyWeather from '../components/hourly/HourlyWeather';
import WeeklyWeather from '../components/weekly/WeeklyWeather';
import LocationEmpty from '../components/main/LocationEmpty';
import { getTodayWeather } from '../apis/weather';
import { useQuery } from '@tanstack/react-query';
import { useWeatherStore } from '../store/weatherStore';
import { useShallow } from 'zustand/shallow';
import { usePinSelecedStore } from '../store/pinSelectedStore';

const ContentPage: React.FC = () => {
  const { pinSelected } = usePinSelecedStore(
    useShallow((state) => ({
      pinSelected: state.pinSelected,
    }))
  );

  const { setCurrent, setHourly, setDaily } = useWeatherStore(
    useShallow((state) => ({
      setCurrent: state.setCurrent,
      setHourly: state.setHourly,
      setDaily: state.setDaily,
    }))
  );

  const { data, error } = useQuery({
    queryKey: ['todayWeather', pinSelected],
    queryFn: async () => {
      const data = await getTodayWeather(
        pinSelected.latitude,
        pinSelected.longitude
      );
      if (!data) throw new Error('No data received from weather API');
      return data;
    },
    enabled: pinSelected.locationName !== '', // locationName이 존재할 때만 실행
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

  const display = () => {
    if (pinSelected.locationName !== '') {
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
