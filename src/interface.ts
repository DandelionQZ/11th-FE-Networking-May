import type {
  WeatherCurrentType,
  WeatherHourlyType,
  WeatherDailyType,
} from './types';

export interface TodayWeatherInterface {
  current: WeatherCurrentType;
  hourly: WeatherHourlyType[];
  daily: WeatherDailyType[];
}
