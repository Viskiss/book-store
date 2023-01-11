import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import type { UserType } from '../../typesUser';
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
  error: {},
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
    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      if (action.payload.token) {
        Cookies.set('token', action.payload.token);
        state.success = true;
        state.isAuthenticated = true;
      }
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

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
