import type { AutReqType } from '../types';
import api from './api';

const createUserPath = '/api/login/sing-up';
const logInUserPath = '/api/login/sing-in';
const currentUserPath = '/api/auth/user/me';
const uploadAvatarUserPath = '/api/auth/user/upload';

const createUser = (email: string, password: string) => {
  return api.post<AutReqType>(createUserPath, { email, password });
};

const changePasword = (password: string, newPassword: string, id: number) => {
  return api.patch<AutReqType>(`/api/auth/user/${id}/password`, {
    password,
    newPassword,
  });
};

const changeUser = (email: string, fullName: string, id: number) => {
  return api.patch<AutReqType>(`/api/auth/user/${id}`, { email, fullName });
};

const logInUser = (email: string, password: string) => {
  return api.post<AutReqType>(logInUserPath, { email, password });
};

const uploadAvatar = (avatar: FormData) => {
  return api.post<AutReqType>(
    uploadAvatarUserPath,
    avatar,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

const currentUser = () => {
  return api.get<AutReqType>(currentUserPath);
};

export default {
  createUser,
  logInUser,
  currentUser,
  changePasword,
  changeUser,
  uploadAvatar,
};
