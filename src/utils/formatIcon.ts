import DaySun from '../assets/DaySun.svg';
import NightMoon from '../assets/NightMoon.svg';
import DayRain from '../assets/DayRain.svg';
import NightRain from '../assets/NightRain.svg';
import DaySnow from '../assets/DaySnow.svg';
import NightSnow from '../assets/NightSnow.svg';
import DayStorm from '../assets/DayStorm.svg';
import NightStorm from '../assets/NightStorm.svg';
import DayWind from '../assets/DayWind.svg';
import NightWind from '../assets/NightWind.svg';
import Clouds from '../assets/Clouds.svg';
import NightClouds from '../assets/NightClouds.svg';

const iconMap: Record<string, string> = {
  '01d': DaySun,
  '02d': Clouds,
  '03d': Clouds,
  '04d': Clouds,
  '09d': DayRain,
  '10d': DayRain,
  '11d': DayStorm,
  '13d': DaySnow,
  '50d': DayWind, // 50은 안개인데, 안개 아이콘은 없고, 바람은 날씨에 없어서 안개에 바람 아이콘 부여..
  '01n': NightMoon,
  '02n': NightClouds,
  '03n': NightClouds,
  '04n': NightClouds,
  '09n': NightRain,
  '10n': NightRain,
  '11n': NightStorm,
  '13n': NightSnow,
  '50n': NightWind, // 50은 안개인데, 안개 아이콘은 없고, 바람은 날씨에 없어서 안개에 바람 아이콘 부여..
};

export const getWeatherIcon = (iconLabel: string): string => {
  const iconString = iconMap[iconLabel];

  return iconString;
};
