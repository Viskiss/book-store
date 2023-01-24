import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import userApi from 'src/api/userApi';

import type {
  ChangePasswordType,
  ChangeUserType,
} from 'src/types';

export const changeUserThunk = createAsyncThunk(
  'user/changeUser',
  async (userData: ChangeUserType, { rejectWithValue }) => {
    const { email, fullName, id } = userData;
    try {
      const user = await userApi.updateUser(id, { email, fullName });
      return user.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const uploadAvatarUserThunk = createAsyncThunk(
  'user/avatarUser',
  async (userData: string, { rejectWithValue }) => {
    try {
      const user = await userApi.uploadAvatar(userData);
      return user.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const changePasswordThunk = createAsyncThunk(
  'user/changePassword',
  async (userData: ChangePasswordType, { rejectWithValue }) => {
    const { password, newPassword, id } = userData;
    try {
      await userApi.changePasword(password, newPassword, id);
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
