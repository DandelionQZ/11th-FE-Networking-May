import React from 'react';
import dayClouds from './assets/dayClouds.svg';

const LocationEmpty: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-[24px]'>
      <img
        className='flex w-[320px] h-[320px] justify-center items-center aspect-square'
        src={dayClouds}
        alt='dayClouds'
      />
      <div className='text-black font-["Pretnedard"] font-4xl font-bold leading-normal'>
        아직 선택된 위치가 없습니다!
      </div>
    </div>
  );
};

export default LocationEmpty;
