import React from 'react';
import ContentTitle from '../ContentTitle';
import './MainWeather.css';
import DetailInfo from './DetailInfo';
import { useWeatherStore } from '../../store/weatherStore';
import { useShallow } from 'zustand/shallow';
import { getWeatherIcon } from '../../utils/formatIcon';
import { getDayOrNight } from '../../utils/formatString';

const MainWeather: React.FC = () => {
  const { current } = useWeatherStore(
    useShallow((state) => ({
      current: state.current,
    }))
  );

  return (
    <div className='weather-main-container'>
      <ContentTitle text={current.datetime + ' 4월 26일 롯데월드 날씨 현황'} />
      {/* 날씨 현황 */}
      <div className='weather-main-current'>
        <div className='current-1st'>
          <img
            src={getWeatherIcon(current.weather.icon)}
            alt='current.weather.icon'
          />
          <div>{current.temperature}º</div>
        </div>
        <div className='current-2nd'>
          {getDayOrNight(current.weather.icon)} / 흐림
        </div>
        <div className='current-3rd'>
          <div>
            체감 <span>{current.feelsLike}º</span>
          </div>
          <div className='sep'>●</div>
          <div>
            습도 <span>{current.humidity}%</span>
          </div>
          <div className='sep'>●</div>
          <div>
            {current.windDirection} <span>{current.windSpeed}m/s</span>
          </div>
        </div>
      </div>

      {/* 날씨 디테일 */}
      <div className='weather-main-detail'>
        <DetailInfo type='미세먼지' value='좋음' bg='#cce8ff' txt='#32a1ff' />
        <DetailInfo type='초미세먼지' value='보통' bg='#ceffcc' txt='#32ff35' />
        <DetailInfo
          type='자외선'
          value={current.uvIndex}
          bg='#ffcccc'
          txt='#ff3232'
        />
        <DetailInfo
          type='일출'
          value={current.sunrise}
          bg='#f6ffcc'
          txt='#ffc532'
        />
      </div>
    </div>
  );
};

export default MainWeather;
