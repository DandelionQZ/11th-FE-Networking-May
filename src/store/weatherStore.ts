import { create } from 'zustand';
import type {
  WeatherCurrentType,
  WeatherDailyType,
  WeatherHourlyType,
} from '../types';

interface WeatherState {
  current: WeatherCurrentType;
  setCurrent: (current: WeatherCurrentType) => void;

  hourly: WeatherHourlyType[];
  setHourly: (hourly: WeatherHourlyType[]) => void;

  daily: WeatherDailyType[];
  setDaily: (daily: WeatherDailyType[]) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  current: {
    datetime: '',
    temperature: 0,
    feelsLike: 0,
    weather: {
      main: '',
      icon: '',
    },
    humidity: 0,
    windSpeed: 0,
    windDirection: '',
    uvIndex: '',
    sunrise: '',
  },
  setCurrent: (current) => set({ current }),

  hourly: [],
  setHourly: (hourly) => set({ hourly }),

  daily: [],
  setDaily: (daily) => set({ daily }),
}));
