import { publicAxios } from './axios';
import { ENDPOINT } from './urls';

export const postSignup = async (email: string, password: string) => {
  const data = {
    loginId: email,
    password: password,
  };

  console.log('회원가입 data: ', data);

  publicAxios.defaults.headers.common['Content-Type'] = 'application/json';

  await publicAxios
    .post(ENDPOINT.AUTH_SIGNUP, data)
    .then((res) => {
      console.log('회원가입 성공: ', res);
    })
    .catch((err) => {
      console.log('회원가입 요청 실패: ', err);
    });
};
