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
  success: false,
  changeUserSuccess: false,
  isAuthenticated: false,
  error: '',
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    exitUser: (state, { payload }: PayloadAction<string>) => {
      if (payload) {
        state.user = null;
        state.isAuthenticated = false;
        Cookies.remove('token');
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(createUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      if (payload.token) {
        Cookies.set('token', payload.token);
        state.success = true;
        state.isAuthenticated = true;
      }
    });

    builder.addCase(logInUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      if (payload.token) {
        Cookies.set('token', payload.token);
        state.success = true;
        state.isAuthenticated = true;
      }
    });

    builder.addCase(changeUserThunk.fulfilled, (state, { payload }) => {
      if (payload) {
        state.changeUserSuccess = true;
      }
    });

    builder.addCase(uploadAvatarUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    builder.addCase(currentUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    builder.addCase(currentUserThunk.rejected, (state, { payload }) => {
      if (payload) {
        Cookies.remove('token');
      }
      // eslint-disable-next-line no-console
      console.log(state.error);
    });
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
