import type { AuthResponseType } from 'src/types/authUserTypes';
import type { UserType } from 'src/types/updateUserTypes';
import api from '../api';

const AUTH_PATH_PREFIX = '/auth';

export const logInUser = (email: string, password: string) => {
  return api.post<AuthResponseType>(`${AUTH_PATH_PREFIX}/sign-in`, {
    email,
    password,
  });
};

export const signUpUser = (data: { email: string; password: string }) => {
  return api.post<AuthResponseType>(`${AUTH_PATH_PREFIX}/sign-up`, data);
};

export const getCurrentUser = () => {
  return api.get<{ user: UserType }>(`${AUTH_PATH_PREFIX}/me`);
};
