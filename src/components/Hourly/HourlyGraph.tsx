import React from 'react';
import { AreaChart, Area, Tooltip } from 'recharts';
import { hourlyData } from '../../hourly';

const HourlyGraph: React.FC = () => {
  return (
    <AreaChart
      width={2110}
      height={100}
      data={hourlyData}
      margin={{
        top: 0,
        right: 20,
        left: 20,
        bottom: 0,
      }}>
      <defs>
        <linearGradient id='colorTemp' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#32A1FF' stopOpacity={0.7} />
          <stop offset='95%' stopColor='#32A1FF' stopOpacity={0} />
        </linearGradient>
      </defs>
      <Tooltip active={false} />
      <Area
        type='monotone'
        dataKey='temp'
        stroke='#32A1FF'
        fillOpacity={1}
        fill='url(#colorTemp)'
      />
    </AreaChart>
  );
};

export default HourlyGraph;
