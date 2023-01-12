import type { AutReqType } from '../../types/user/auth';
import api from '../api';

const AUTH_PATH_PREFIX = '/auth';

const logInUser = (email: string, password: string) => {
  return api.post<AutReqType>(`${AUTH_PATH_PREFIX}/sign-in`, { email, password });
};

const createUser = (data: {email: string; password: string}) => {
  return api.post<AutReqType>(`${AUTH_PATH_PREFIX}/sign-up`, data);
};

const currentUser = () => {
  return api.get<AutReqType>(`${AUTH_PATH_PREFIX}/me`);
};

export default {
  createUser,
  currentUser,
  logInUser,
};
