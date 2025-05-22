import React from 'react';
import TimeTemp from './TimeTemp';
import './TimeTempList.css';
import { useWeatherStore } from '../../store/weatherStore';
import { useShallow } from 'zustand/shallow';

const TimeTempList: React.FC = () => {
  const { hourly } = useWeatherStore(
    useShallow((state) => ({
      hourly: state.hourly,
    }))
  );

  return (
    <div className='time-temp-list'>
      {hourly.map((h) => (
        <TimeTemp timeTemp={h} key={h.hour} />
      ))}
    </div>
  );
};

export default TimeTempList;
