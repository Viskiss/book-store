import type { UserType } from '../../types/userType';
import api from '../api';

const USER_PATH_PREFIX = '/user';

const updateUserApi = {
  updateUser: (userId: number, data: { email: string; fullName: string }) => {
    return api.patch<{ user: UserType }>(`${USER_PATH_PREFIX}/${userId}`, data);
  },

  changeUserPassword: (password: string, newPassword: string) => {
    return api.patch(`${USER_PATH_PREFIX}/password`, {
      password,
      newPassword,
    });
  },

  uploadUserAvatar: (avatar: string) => {
    return api.post<{ user: UserType }>(`${USER_PATH_PREFIX}/upload`, {
      avatar,
    });
  },
};

export default {
  updateUser: updateUserApi.updateUser,
  changeUserPassword: updateUserApi.changeUserPassword,
  uploadUserAvatar: updateUserApi.uploadUserAvatar,
};
