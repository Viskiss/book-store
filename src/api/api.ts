import axios from 'axios';
import _random from 'lodash/random';

import config from 'src/utils/config';
import tokenHelper from 'src/utils/tokenHelper';

const getAuthHeader = (token = tokenHelper.token.get()) => `Bearer ${token}`;

export const axiosInstance = axios.create({
  baseURL: config.config.apiBaseUrl,
  headers: {
    Authorization: getAuthHeader(),
  },
});

export const setApiToken = (token: string) => {
  tokenHelper.token.set(token);
  axiosInstance.defaults.headers.authorization = getAuthHeader();
};

axiosInstance.interceptors.request.use(async (request) => {
  await new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, _random(300, 500));
  });

  return request;
});

export default axiosInstance;
