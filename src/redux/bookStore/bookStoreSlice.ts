import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import storage from '../../utility/storage';
import type { UserType } from '../../models/UserType';
import { createUserThunk } from './bookStoreThunks';

const initialState = () => ({
  user: {} as UserType,
  isAuth: false,
  // isLoading: false,
  // error: '',
});

const bookStoreSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    // setLoading: (state, { payload }) => {
    //   // state.isLoading = payload;
    // },
  },
  extraReducers: (builder) => {
    // builder.addCase(getUserThunk.fulfilled, (state, action) => {
    //   if (action.payload) {
    //     state.user = action.payload;
    //   }
    // });

    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.user.email = action.payload.user.email;
        state.user.password = action.payload.user.password;
        localStorage.setItem('token', action.payload.token);
      }
    });

    // builder.addCase(createUserThunk.rejected, (state, action) => {
    //   // eslint-disable-next-line no-console
    //   console.log(action.error.message);
    //   state.error = action.error.message!;
    // });
  },

});

export const storeSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
