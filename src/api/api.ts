import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((request) => {
  const token = Cookies.get('token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    request.headers = {
      ...request.headers,
      authorization: `Bearer ${token}`,
    };
  }
  return request;
});

export default api;
