import { createSlice } from '@reduxjs/toolkit';

import { setApiToken } from '../../api/api';

import type { UserType } from '../../types';
import tokenHelper from '../../utils/tokenHelper';

import {
  currentUserThunk,
  logInUserThunk,
  signUpThunk,
} from './thunks/authUser';

import { changeUserThunk, uploadAvatarUserThunk } from './thunks/updateUser';

const initialState = () => ({
  user: null as UserType | null,
  isAuthenticated: tokenHelper.token.get() ?? false,
  error: '',
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    exitUser: (state, { payload }) => {
      if (payload) {
        state.user = null;
        state.isAuthenticated = false;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;

      setApiToken(payload.token);
      state.isAuthenticated = true;
    });

    builder.addCase(logInUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;

      setApiToken(payload.token);
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
