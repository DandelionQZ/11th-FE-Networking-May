import React from 'react';
import './DetailInfo.css';

interface DetailInfoProps {
  type: string;
  value: string;
}

const DetailInfo: React.FC<DetailInfoProps> = ({ type, value }) => {
  return (
    <div className='detail-info'>
      <div className='tdetail-type'>{type}</div>
      <div className='detail-value'>{value}</div>
    </div>
  );
};

export default DetailInfo;
