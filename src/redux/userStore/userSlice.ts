import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import type { UserType } from '../../types';
import {
  changeUserThunk,
  createUserThunk,
  currentUserThunk,
  logInUserThunk,
} from './userThunks';

const initialState = () => ({
  user: null as UserType | null,
  success: false,
  error: {},
});

const bookStoreSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      if (action.payload.token) {
        Cookies.set('token', action.payload.token);
        state.success = true;
      }
    });

    builder.addCase(createUserThunk.rejected, (state, action) => {
      state.error = action.error;
    });

    builder.addCase(logInUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      if (action.payload.token) {
        Cookies.set('token', action.payload.token);
        state.success = true;
      }
    });

    builder.addCase(changeUserThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.success = true;
      }
    });

    builder.addCase(currentUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export const storeSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
