import { createSlice } from '@reduxjs/toolkit';

import { setApiToken } from 'src/api/api';

import type { UserType } from 'src/types/userType';

import {
  currentUserThunk,
  logInUserThunk,
  signUpThunk,
} from 'src/redux/userStore/thunks/authUser';

import {
  changeUserThunk,
  uploadAvatarUserThunk,
} from 'src/redux/userStore/thunks/updateUser';

const initialState = () => ({
  user: null as UserType | null,
  theme: localStorage.getItem('theme') || 'lightTheme',
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
    changeTheme: (state, { payload }) => {
      state.theme = payload;
      localStorage.setItem('theme', payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      setApiToken(payload.token);
    });

    builder.addCase(logInUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      setApiToken(payload.token);
    });

    builder.addCase(changeUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    builder.addCase(uploadAvatarUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });

    builder.addCase(currentUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
