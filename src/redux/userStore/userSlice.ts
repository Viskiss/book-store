import { createSlice } from '@reduxjs/toolkit';

import { setApiToken } from 'src/api/api';

import type { UserType } from 'src/types';
import tokenHelper from 'src/utils/tokenHelper';

import {
  changeUserThunk,
  currentUserThunk,
  logInUserThunk,
  signUpThunk,
  uploadAvatarUserThunk,
} from 'src/redux/userStore/thunks';

const initialState = () => ({
  user: null as UserType | null,
  isAuthenticated: false,
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
      if (payload) {
        state.user = payload.user;
      }
    });
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
