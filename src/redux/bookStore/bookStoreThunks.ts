import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import userApi from '../../api/userApi';
import type { UserCreateType } from '../../types/UserType';

export const createUserThunk = createAsyncThunk('user/createUser', async (userData: UserCreateType, { rejectWithValue }) => {
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
});

export const logInUserThunk = createAsyncThunk('user/logInUser', async (userData: UserCreateType, { rejectWithValue }) => {
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
});

export const currentUserThunk = createAsyncThunk('user/currentUser', async (_, { rejectWithValue }) => {
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
});
