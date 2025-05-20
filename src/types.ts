export type hourlyTimeTemp = {
  time: string;
  temp: number;
};

export type weeklyDay = {
  yyyymmdd: string;
  dayTemperature: number;
  nightTepmerature: number;
  dayRainPer: number;
  nightRainPer: number;
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
