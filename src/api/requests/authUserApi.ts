import type { UserType } from 'src/types/userType';

import api from '../api';

export type AuthUserType = {
  token: string;
  user: UserType;
};

const AUTH_PATH_PREFIX = '/auth';

export const logInUser = (email: string, password: string) => {
  return api.post<AuthUserType>(`${AUTH_PATH_PREFIX}/sign-in`, {
    email,
    password,
  });
};

export const signUpUser = (data: { email: string; password: string }) => {
  return api.post<AuthUserType>(`${AUTH_PATH_PREFIX}/sign-up`, data);
};

export const getCurrentUser = () => {
  return api.get<{ user: UserType }>(`${AUTH_PATH_PREFIX}/me`);
};
