import type { TodayWeatherInterface } from '../interface';

const mockTodayWeatherData: TodayWeatherInterface = {
  current: {
    datetime: '2025-05-18 21:36',
    temperature: 14.8,
    feelsLike: 13.5,
    weather: {
      main: 'Clear',
      icon: '01n',
    },
    humidity: 45,
    windSpeed: 0.8,
    windDirection: '서풍',
    uvIndex: '낮음',
    sunrise: '05:20',
  },
  // 현재 시간부터 24시간 데이터
  hourly: [
    {
      hour: '21:00',
      temperature: 14.9,
      icon: '01n',
    },
    {
      hour: '22:00',
      temperature: 14.8,
      icon: '01n',
    },
    {
      hour: '23:00',
      temperature: 14.7,
      icon: '01n',
    },
    {
      hour: '00:00',
      temperature: 14.4,
      icon: '01n',
    },
    {
      hour: '01:00',
      temperature: 13.9,
      icon: '01n',
    },
    {
      hour: '02:00',
      temperature: 13.2,
      icon: '01n',
    },
    {
      hour: '03:00',
      temperature: 12.5,
      icon: '01n',
    },
    {
      hour: '04:00',
      temperature: 12.0,
      icon: '02n',
    },
    {
      hour: '05:00',
      temperature: 11.4,
      icon: '02n',
    },
    {
      hour: '06:00',
      temperature: 11.7,
      icon: '03d',
    },
    {
      hour: '07:00',
      temperature: 13.3,
      icon: '03d',
    },
    {
      hour: '08:00',
      temperature: 15.2,
      icon: '04d',
    },
    {
      hour: '09:00',
      temperature: 17.4,
      icon: '04d',
    },
    {
      hour: '10:00',
      temperature: 19.9,
      icon: '03d',
    },
    {
      hour: '11:00',
      temperature: 20.5,
      icon: '04d',
    },
    {
      hour: '12:00',
      temperature: 22.2,
      icon: '04d',
    },
    {
      hour: '13:00',
      temperature: 22.9,
      icon: '04d',
    },
    {
      hour: '14:00',
      temperature: 22.4,
      icon: '04d',
    },
    {
      hour: '15:00',
      temperature: 19.7,
      icon: '04d',
    },
    {
      hour: '16:00',
      temperature: 18.9,
      icon: '04d',
    },
    {
      hour: '17:00',
      temperature: 18.7,
      icon: '04d',
    },
    {
      hour: '18:00',
      temperature: 18.1,
      icon: '04d',
    },
    {
      hour: '19:00',
      temperature: 17.8,
      icon: '04d',
    },
    {
      hour: '20:00',
      temperature: 17.5,
      icon: '04n',
    },
  ],
  daily: [
    {
      date: '05.18',
      morningTemp: 19.9,
      afternoonTemp: 14.7,
      weather: {
        main: 'Clouds',
        icon: '04d',
      },
    },
    {
      date: '05.19',
      morningTemp: 22.2,
      afternoonTemp: 17.5,
      weather: {
        main: 'Clouds',
        icon: '04d',
      },
    },
    {
      date: '05.20',
      morningTemp: 26.4,
      afternoonTemp: 21.7,
      weather: {
        main: 'Clouds',
        icon: '04d',
      },
    },
    {
      date: '05.21',
      morningTemp: 27.3,
      afternoonTemp: 22.6,
      weather: {
        main: 'Clouds',
        icon: '04d',
      },
    },
    {
      date: '05.22',
      morningTemp: 25.7,
      afternoonTemp: 18.1,
      weather: {
        main: 'Rain',
        icon: '10d',
      },
    },
  ],
};
