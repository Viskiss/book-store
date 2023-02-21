import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import userApi from 'src/api/requests/updateUserApi';

import type { UserType } from 'src/types/userType';

type ChangeUserType = Pick<UserType, 'email' | 'fullName' | 'id'>;

export type ChangePasswordType = {
  password: UserType['password'];
  newPassword: string;
};

export const changeUserThunk = createAsyncThunk(
  'user/changeUser',
  async (userData: ChangeUserType, { rejectWithValue }) => {
    const { email, fullName, id } = userData;
    try {
      const response = await userApi.updateUser(id, { email, fullName });
      return response.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);

export const uploadAvatarUserThunk = createAsyncThunk(
  'user/avatarUser',
  async (userData: string, { rejectWithValue }) => {
    try {
      const response = await userApi.uploadUserAvatar(userData);
      return response.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);

export const changePasswordThunk = createAsyncThunk(
  'user/changePassword',
  async (userData: ChangePasswordType, { rejectWithValue }) => {
    const { password, newPassword } = userData;
    try {
      await userApi.changeUserPassword(password, newPassword);
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);
