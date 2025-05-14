import React from 'react';
import './HourlyWeather.css';
import TimeTempList from './TimeTempList';
import HourlyGraph from './HourlyGraph';
import ContentTitle from '../ContentTitle';

const HourlyWeather: React.FC = () => {
  return (
    <div className='hourly-weather'>
      <ContentTitle text='시간별 현황' />

      <div className='hourly-graph'>
        <HourlyGraph />
        <TimeTempList />
      </div>
    </div>
  );
};

export default HourlyWeather;
