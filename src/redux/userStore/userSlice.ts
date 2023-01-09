import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import type { UserType } from '../../typesUser';
import {
  changeUserThunk,
  createUserThunk,
  currentUserThunk,
  logInUserThunk,
  uploadAvatarUserThunk,
} from './userThunks';

const initialState = () => ({
  user: null as UserType | null,
  success: false,
  changeUserSuccess: false,
  isAuthenticated: false,
  error: {},
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      if (action.payload.token) {
        Cookies.set('token', action.payload.token);
        state.success = true;
        state.isAuthenticated = true;
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
        state.isAuthenticated = true;
      }
    });

    builder.addCase(changeUserThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.changeUserSuccess = true;
      }
    });

    builder.addCase(uploadAvatarUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addCase(currentUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
  },
});

export const storeSliceActions = userSlice.actions;

export default userSlice.reducer;
