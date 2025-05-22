import { API_URL } from './configs';

export const BASE_URL = API_URL;

export const ENDPOINT = {
  // auth
  AUTH_SIGNUP: '/auth/signup',
  AUTH_LOGIN: '/auth/login',
  AUTH_LOGOUT: '/auth/logout',

  // weather
  WEATHER_TODAY: '/api/weather',

  // station
  STATION_NEAR: '/api/station',

  // dust
  DUST_TODAY: '/api/dust',
};
