import React from 'react';
import HalfDay from './HalfDay';
import './AllDay.css';

const AllDay: React.FC = () => {
  return (
    <div className='all-day'>
      <div className='half-day-set'>
        <HalfDay />
        <HalfDay />
      </div>
      <div className='day-and-date'>
        <div className='day-and-date day'>오늘</div>
        <div className='day-and-date date'>4.26</div>
      </div>
    </div>
  );
};

export default AllDay;
