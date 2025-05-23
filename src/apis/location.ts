import { authAxios } from './axios';
import { ENDPOINT } from './urls';

// 위치 리스트 조회 api
export const getLocations = async () => {
  const res = await authAxios.get(ENDPOINT.LOCATION_INFO);
  return res.data.data;
};
