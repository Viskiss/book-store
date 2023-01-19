import type { UserType } from '../types/updateUser';
import api from './api';

const AUTH_PATH_PREFIX = '/auth';

export type AuthResponseType = {
  token: string;
  user: UserType;
};

const logInUser = (email: string, password: string) => {
  return api.post<AuthResponseType>(`${AUTH_PATH_PREFIX}/sign-in`, {
    email,
    password,
  });
};

const signUpUser = (data: { email: string; password: string }) => {
  return api.post<AuthResponseType>(`${AUTH_PATH_PREFIX}/sign-up`, data);
};

const getMe = () => {
  return api.get<{ user: UserType }>(`${AUTH_PATH_PREFIX}/me`);
};

export default {
  signUpUser,
  getMe,
  logInUser,
};
