import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import type {
  UserCreateType,
} from '../../../types/user/auth';

import userApi from '../../../api/user/auth';

export const createUserThunk = createAsyncThunk(
  'user/createUser',
  async (userData: UserCreateType, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const user = await userApi.createUser({ email, password });
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
  async (_, { rejectWithValue }) => {
    try {
      const user = await userApi.currentUser();
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
