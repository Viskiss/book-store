import axios from 'axios';

import constants from '../utils/constants';
import tokenHelper from '../utils/tokenHelper';

const getAuthHeader = (token = tokenHelper.token.get()) => `Bearer ${token}`;

export const axiosInstance = axios.create({
  baseURL: constants.api,
  headers: {
    authorization: getAuthHeader(),
  },
});

export const setApiToken = (token: string) => {
  tokenHelper.token.set(token);
  axiosInstance.defaults.headers.authorization = getAuthHeader();
};

export default axiosInstance;
