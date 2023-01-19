import axios from 'axios';

import config from '../utils/config';
import tokenHelper from '../utils/tokenHelper';

const getAuthHeader = (token = tokenHelper.token.get()) => `Bearer ${token}`;

export const axiosInstance = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    Authorization: getAuthHeader(),
  },
});

export const setApiToken = (token: string) => {
  tokenHelper.token.set(token);
  axiosInstance.defaults.headers.authorization = getAuthHeader();
};

export default axiosInstance;
