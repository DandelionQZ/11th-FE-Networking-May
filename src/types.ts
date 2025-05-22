export type hourlyTimeTemp = {
  time: string;
  temp: number;
};

export type weeklyDay = {
  date: string;
  morningTemp: number;
  afternoonTemp: number;
  weather: {
    main: string;
    icon: string;
  };
  // dayRainPer: number;
  // nightRainPer: number;
};

export type WeatherIconType = {
  main: string;
  icon: string;
};

export type WeatherCurrentType = {
  datetime: string;
  temperature: number;
  feelsLike: number;
  weather: WeatherIconType;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  uvIndex: string;
  sunrise: string;
};

export type WeatherHourlyType = {
  hour: string;
  temperature: number;
  icon: string;
};

export type WeatherDailyType = {
  date: string;
  morningTemp: number;
  afternoonTemp: number;
  weather: WeatherIconType;
};

export type stationType = {
  stationName: string;
  stationCode: string;
  address: string;
  distanceTm: number;
};

export type dustType = {
  stationName: string;
  dataTime: string;
  pm10Value: string;
  pm10Grade: string;
  pm25Value: string;
  pm25Grade: string;
};
