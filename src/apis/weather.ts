import { getCityWord } from '../utils/formatString';
import { authAxios } from './axios';
import { ENDPOINT } from './urls';

export const getTodayWeather = async (lat: number, lon: number) => {
  const res = await authAxios.get(ENDPOINT.WEATHER_TODAY, {
    params: { lat, lon },
  });
  return res.data.data;
};

export const getDust = async (lat: number, lon: number) => {
  try {
    const station = await authAxios.get(ENDPOINT.STATION_NEAR, {
      params: { lat, lon },
    });

    const city: string = getCityWord(station.data.data.address).trim();

    const res = await authAxios.get(ENDPOINT.DUST_TODAY, {
      params: {
        city,
        stationName: station.data.data.stationName,
      },
    });

    return res.data.data;
  } catch (error) {
    console.error('getDust error:', error);
    throw error;
  }
};
