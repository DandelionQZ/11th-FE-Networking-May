import React from 'react';
import ContentTitle from '../ContentTitle';
import clouds from '../assets/Clouds.svg';
import './WeatherMain.css';
import DetailInfo from './DetailInfo';

const WeatherMain: React.FC = () => {
  return (
    <div className='weather-main-container'>
      <ContentTitle text='4월 26일 롯데월드 날씨 현황' />

      {/* 날씨 현황 */}
      <div className='weather-main-current'>
        <div className='current-1st'>
          <img src={clouds} alt='clouds' />
          <div>12.2º</div>
        </div>
        <div className='current-2nd'>야간 / 흐림</div>
        <div className='current-3rd'>
          <div>
            체감 <span>9.0º</span>
          </div>
          <div className='sep'>●</div>
          <div>
            습도 <span>48%</span>
          </div>
          <div className='sep'>●</div>
          <div>
            남동풍 <span>0.4m/s</span>
          </div>
        </div>
      </div>

      {/* 날씨 디테일 */}
      <div className='weather-main-detail'>
        <DetailInfo type='미세먼지' value='좋음' bg='#cce8ff' txt='#32a1ff' />
        <DetailInfo type='초미세먼지' value='보통' bg='#ceffcc' txt='#32ff35' />
        <DetailInfo type='자외선' value='위험' bg='#ffcccc' txt='#ff3232' />
        <DetailInfo type='일출' value='05:44' bg='#f6ffcc' txt='#ffc532' />
      </div>
    </div>
  );
};

export default WeatherMain;
