import { authAxios } from './axios';
import { ENDPOINT } from './urls';

export const getTodayWeather = async (lat: number, lon: number) => {
  const res = await authAxios.get(ENDPOINT.WEATHER_TODAY, {
    params: { lat, lon },
  });
  return res.data.data;
};

export const getStation = async (lat: number, lon: number) => {
  const res = await authAxios.get(ENDPOINT.STATION_NEAR, {
    params: { lat, lon },
  });
  return res.data.data;
};
