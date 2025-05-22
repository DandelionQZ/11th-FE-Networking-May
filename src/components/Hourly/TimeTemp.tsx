import React from 'react';
import './TimeTemp.css';
import type { WeatherHourlyType } from '../../types.ts';
import { getWeatherIcon } from '../../utils/exchangeIcon.ts';
import { formatHour } from '../../utils/formatHour.ts';

interface TimeTempProps {
  timeTemp: WeatherHourlyType;
}

const TimeTemp: React.FC<TimeTempProps> = ({ timeTemp }) => {
  return (
    <div className='time-temp'>
      <img src={getWeatherIcon(timeTemp.icon)} alt='NightClouds' />
      <div className='time-temp time'>{formatHour(timeTemp.hour)}시</div>
      <div className='time-temp temp'>{timeTemp.temperature}º</div>
    </div>
  );
};

export default TimeTemp;
