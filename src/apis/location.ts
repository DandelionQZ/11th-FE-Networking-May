import { authAxios } from './axios';
import { ENDPOINT } from './urls';

// 위치 리스트 조회 api
export const getLocations = async () => {
  const res = await authAxios.get(ENDPOINT.LOCATION_INFO);
  return res.data.data;
};

// 위치 추가 api
export const postLocations = async (
  locationName: string,
  latitude: number,
  longitude: number
) => {
  console.log('받은거 :::', locationName, latitude, longitude);

  const res = await authAxios.post(ENDPOINT.LOCATION_INFO, {
    locationName,
    latitude,
    longitude,
  });
  return res;
};
