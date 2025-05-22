import React from 'react';
import './HalfDay.css';

interface HalfDayProps {
  // rain: number;
  temp: number;
  m: string;
  c: string;
}

const HalfDay: React.FC<HalfDayProps> = ({ /*rain,*/ temp, m, c }) => {
  return (
    <div className='half-day'>
      {/* <div className='half-day-rain'>{rain}%</div> */}
      <div className='half-day-meridiem'>{m}</div>
      <div className='half-day-temp' style={{ color: `${c}` }}>
        {temp}º
      </div>
    </div>
  );
};

export default HalfDay;
