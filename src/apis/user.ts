import { publicAxios } from './axios';
import { ENDPOINT } from './urls';

export const postSignup = async (email: string, password: string) => {
  const data = {
    loginId: email,
    password: password,
  };

  publicAxios.defaults.headers.common['Content-Type'] = 'application/json';

  await publicAxios.post(ENDPOINT.AUTH_SIGNUP, data);
};

export const postLogin = async (email: string, password: string) => {
  const data = {
    loginId: email,
    password: password,
  };

  publicAxios.defaults.headers.common['Content-Type'] = 'application/json';

  const response = await publicAxios.post(ENDPOINT.AUTH_LOGIN, data);
  return response.data;
};
