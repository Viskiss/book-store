import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { changeUserPassword, updateUser, uploadUserAvatar } from 'src/api/requests/userApi';

import type { UserType } from 'src/types/userType';

type ChangeUserType = Pick<UserType, 'email' | 'fullName' | 'id'>;

export type ChangePasswordType = {
  password: UserType['password'];
  newPassword: string;
  id: UserType['id'];
};

export const changeUserThunk = createAsyncThunk(
  'user/changeUser',
  async (userData: ChangeUserType, { rejectWithValue }) => {
    const { email, fullName, id } = userData;
    try {
      const user = await updateUser(id, { email, fullName });
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
      const user = await uploadUserAvatar(userData);
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
      await changeUserPassword(password, newPassword, id);
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
