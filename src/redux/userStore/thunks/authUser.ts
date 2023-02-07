import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import tokenHelper from 'src/utils/tokenHelper';

import type { UserCreateType } from 'src/types';

import { getMe, logInUser, signUpUser } from 'src/api';

export const signUpThunk = createAsyncThunk(
  'user/createUser',
  async (userData: UserCreateType, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const user = await signUpUser({ email, password });
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
      const user = await logInUser(email, password);
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
      const user = await getMe();
      return user.data;
    } catch {
      return null;
    }
  },
);
