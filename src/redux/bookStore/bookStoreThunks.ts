import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import userApi from '../../api/userApi';
import type {
  ChangePasswordType,
  UserCreateType,
  ChangeUserType,
} from '../../types/UserType';

export const createUserThunk = createAsyncThunk(
  'user/createUser',
  async (userData: UserCreateType, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const user = await userApi.createUser(email, password);
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

export const changeUserThunk = createAsyncThunk(
  'user/changeUser',
  async (userData: ChangeUserType, { rejectWithValue }) => {
    const { email, fullName, id } = userData;
    try {
      const user = await userApi.changeUser(email, fullName, id);
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
      const user = await userApi.changePasword(password, newPassword, id);
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
  'user/logInUser',
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
