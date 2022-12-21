import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import userApi from '../../api/userApi';
import type { UserCreateType } from '../../models/UserType';

export const createUserThunk = createAsyncThunk('user/createUser', async (userData: UserCreateType, { rejectWithValue }) => {
  const { email, password } = userData;
  try {
    // eslint-disable-next-line no-console
    console.log(userApi);
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
