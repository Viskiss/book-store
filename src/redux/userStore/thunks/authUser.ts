import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type { UserType } from 'src/types/userType';
import tokenHelper from 'src/utils/tokenHelper';

import { getCurrentUser, logInUser, signUpUser } from 'src/api/requests/authUserApi';

export type CreateUserType = {
  email: UserType['email'];
  password: UserType['password'];
};

export const signUpThunk = createAsyncThunk(
  'user/createUser',
  async (userData: CreateUserType, { rejectWithValue }) => {
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
  async (userData: CreateUserType, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const user = await logInUser(email, password);
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
  async () => {
    const token = tokenHelper.token.get();
    if (!token) {
      return null;
    }
    const response = await getCurrentUser();
    return response.data.user;
  },
);
