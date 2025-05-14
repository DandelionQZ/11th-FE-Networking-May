import React from 'react';
import './HourlyWeather.css';
import TimeTempList from './TimeTempList';
import HourlyGraph from './HourlyGraph';

const HourlyWeather: React.FC = () => {
  return (
    <div className='hourly-weather'>
      {/* ContentTitle 컴포넌트 추가 */}

      <div className='hourly-graph'>
        <HourlyGraph />
        <TimeTempList />
      </div>
    </div>
  );
};

export default HourlyWeather;
