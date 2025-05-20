import { axiosInstance } from './axios';
import { ENDPOINT } from './urls';

export const postSignup = async (email: string, password: string) => {
  const data = {
    loginId: email,
    password: password,
  };

  console.log('data: ', data);

  axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

  await axiosInstance
    .post(ENDPOINT.AUTH_SIGNUP, data)
    .then((res) => {
      console.log('성공: ', res);
    })
    .catch((err) => {
      console.log('요청 실패: ', err);
    });
};
