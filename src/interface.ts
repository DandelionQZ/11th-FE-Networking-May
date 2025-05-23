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

export interface LocationType {
  locationId: number;
  locationName: string;
  latitude: number;
  longitude: number;
  pinned: boolean;
}
