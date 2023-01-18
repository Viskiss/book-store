import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import type { UserType } from '../../types/user/update';
import {
  createUserThunk,
  currentUserThunk,
  logInUserThunk,
} from './thunks/authUser';

import { changeUserThunk, uploadAvatarUserThunk } from './thunks/updateUser';

const initialState = () => ({
  user: null as UserType | null,
  isAuthenticated: false,
  error: '',
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    exitUser: (state, { payload }) => {
      if (payload) {
        state.user = null;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;

      Cookies.set('token', payload.token);
      state.isAuthenticated = true;
    });

    builder.addCase(logInUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;

      Cookies.set('token', payload.token);
      state.isAuthenticated = true;
    });

    builder.addCase(changeUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    builder.addCase(uploadAvatarUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    builder.addCase(currentUserThunk.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload.user;
    });
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
