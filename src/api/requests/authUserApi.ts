import type { UserType } from 'src/types/userType';

import api from '../api';

export type AuthUserType = {
  token: string;
  user: UserType;
};

const AUTH_PATH_PREFIX = '/auth';

const authUser = {
  signInUser: (email: string, password: string) => {
    return api.post<AuthUserType>(`${AUTH_PATH_PREFIX}/sign-in`, {
      email,
      password,
    });
  },

  signUpUser: (data: { email: string; password: string }) => {
    return api.post<AuthUserType>(`${AUTH_PATH_PREFIX}/sign-up`, data);
  },

  getCurrentUser: () => {
    return api.get<{ user: UserType }>(`${AUTH_PATH_PREFIX}/me`);
  },
};

export default {
  signIn: authUser.signInUser,
  signUp: authUser.signUpUser,
  getCurrentUser: authUser.getCurrentUser,
};
