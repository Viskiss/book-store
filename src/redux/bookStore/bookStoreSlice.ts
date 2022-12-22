import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import type { UserType } from '../../types/UserType';
import { createUserThunk, currentUserThunk, logInUserThunk } from './bookStoreThunks';

const initialState = () => ({
  user: {} as UserType,
});

const bookStoreSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      if (action.payload.token) {
        Cookies.set('token', action.payload.token);
      }
    });

    builder.addCase(logInUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      if (action.payload.token) {
        Cookies.set('token', action.payload.token);
      }
    });

    builder.addCase(currentUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      if (action.payload.token) {
        Cookies.set('token', action.payload.token);
      }
    });
  },

});

export const storeSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
