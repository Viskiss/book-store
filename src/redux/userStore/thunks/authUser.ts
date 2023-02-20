import { createAsyncThunk } from '@reduxjs/toolkit';

import type { UserType } from 'src/types/userType';
import tokenHelper from 'src/utils/tokenHelper';

import userApi from 'src/api/requests/authUserApi';
import { AxiosError } from 'axios';

export type CreateUserType = Pick<UserType, 'email' | 'password'>;

export const signUpThunk = createAsyncThunk(
  'user/createUser',
  async (userData: CreateUserType, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const user = await userApi.signUp({ email, password });
      return user.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);

export const logInUserThunk = createAsyncThunk(
  'user/loginUser',
  async (userData: CreateUserType, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const user = await userApi.signIn(email, password);
      return user.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);

export const currentUserThunk = createAsyncThunk(
  'user/currentUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = tokenHelper.token.get();
      if (!token) {
        return null;
      }
      const response = await userApi.getCurrentUser();
      return response.data.user;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);
