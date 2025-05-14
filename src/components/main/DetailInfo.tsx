import React from 'react';
import './DetailInfo.css';

interface DetailInfoProps {
  type: string;
  value: string;
  bg: string;
  txt: string;
}

const DetailInfo: React.FC<DetailInfoProps> = ({ type, value, bg, txt }) => {
  return (
    <div className='detail-info' style={{ backgroundColor: bg }}>
      <div className='detail-type'>{type}</div>
      <div className='detail-value' style={{ color: txt }}>
        {value}
      </div>
    </div>
  );
};

export default DetailInfo;
