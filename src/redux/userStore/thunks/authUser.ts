import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import tokenHelper from 'src/utils/tokenHelper';
import userApi from 'src/api/authApi';

import type {
  UserCreateType,
} from 'src/types';

export const signUpThunk = createAsyncThunk(
  'user/createUser',
  async (userData: UserCreateType, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const user = await userApi.signUpUser({ email, password });
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

export const logInUserThunk = createAsyncThunk(
  'user/loginUser',
  async (userData: UserCreateType, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const user = await userApi.logInUser(email, password);
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

export const currentUserThunk = createAsyncThunk(
  'user/currentUser',
  async () => {
    try {
      const token = tokenHelper.token.get();
      if (!token) {
        return null;
      }
      const user = await userApi.getMe();
      return user.data;
    } catch {
      return null;
    }
  },
);
