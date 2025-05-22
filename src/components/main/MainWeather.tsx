import React, { useEffect } from 'react';
import ContentTitle from '../ContentTitle';
import './MainWeather.css';
import DetailInfo from './DetailInfo';
import { useWeatherStore } from '../../store/weatherStore';
import { useShallow } from 'zustand/shallow';
import { getWeatherIcon, getWeatherStatus } from '../../utils/formatIcon';
import { getDayOrNight } from '../../utils/formatString';
import { getDust } from '../../apis/weather';
import { useQuery } from '@tanstack/react-query';
import { useDustStore } from '../../store/dustStore';
import { getDustStatus } from '../../utils/dustGrade';
import { formatDateToKorean } from '../../utils/formatDate';

const MainWeather: React.FC = () => {
  // todo : 선택된 위치 정보의 위경도를 불러오도록 변경
  const lat = 37;
  const lon = 127;

  const { current } = useWeatherStore(
    useShallow((state) => ({
      current: state.current,
    }))
  );

  const { dust, setDust } = useDustStore(
    useShallow((state) => ({
      dust: state.dust,
      setDust: state.setDust,
    }))
  );

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['dust'],
    queryFn: async () => {
      const data = await getDust(lat, lon);
      if (!data) throw new Error('No data received from dust API');
      return data;
    },
  });

  useEffect(() => {
    if (!isLoading && data) {
      setDust(data);
    }
  }, [isLoading, data, setDust]);

  if (isError) {
    console.log('dust api 호출 에러: ', error);
  }

  return (
    <div className='weather-main-container'>
      <ContentTitle
        // todo : '롯데월드' 대신에 장소명 작성
        text={formatDateToKorean(current.datetime) + ' 롯데월드' + ' 날씨 현황'}
      />
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
          {getDayOrNight(current.weather.icon)} /{' '}
          {getWeatherStatus(current.weather.main)}
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
        <DetailInfo
          type='미세먼지'
          value={getDustStatus(dust.pm10Grade)}
          bg='#cce8ff'
          txt='#32a1ff'
        />
        <DetailInfo
          type='초미세먼지'
          value={getDustStatus(dust.pm25Grade)}
          bg='#ceffcc'
          txt='#32ff35'
        />
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
