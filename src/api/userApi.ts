import type { AutReqType } from '../types/user/auth';
import api from './api';

const USER_PATH_PREFIX = '/user';

const updateUser = (userId: number, data: { email: string; fullName: string }) => {
  return api.patch<AutReqType>(`${USER_PATH_PREFIX}/${userId}`, data);
};

const changePasword = (password: string, newPassword: string, id: number) => {
  return api.patch<AutReqType>(`${USER_PATH_PREFIX}/${id}/password`, {
    password,
    newPassword,
  });
};

const uploadAvatar = (avatar: string | ArrayBuffer | null) => {
  return api.post<AutReqType>(`${USER_PATH_PREFIX}/upload`, { avatar });
};

export default {
  changePasword,
  updateUser,
  uploadAvatar,
};
