import type { UserType } from '../types/userTypes/updateUser';
import api from './api';

const USER_PATH_PREFIX = '/user';

const updateUser = (userId: number, data: { email: string; fullName: string }) => {
  return api.patch<{ user: UserType }>(`${USER_PATH_PREFIX}/${userId}`, data);
};

const changePasword = (password: string, newPassword: string, id: number) => {
  return api.patch(`${USER_PATH_PREFIX}/${id}/password`, {
    password,
    newPassword,
  });
};

const uploadAvatar = (avatar: string) => {
  return api.post<{ user: UserType }>(`${USER_PATH_PREFIX}/upload`, { avatar });
};

export default {
  changePasword,
  updateUser,
  uploadAvatar,
};
