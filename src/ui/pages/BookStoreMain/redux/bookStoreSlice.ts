import { createSlice } from '@reduxjs/toolkit';

import type { BookType, CartType } from 'src/types/bookStoreTypes';

import {
  getCartThunk,
  addBookThunk,
  changeCopyBookThunk,
} from './thunks/cartThunks';

import {
  getFilterBooksThunk,
} from './thunks/bookThunks';

const initialState = () => ({
  books: [] as BookType[],
  cart: [] as CartType[],
  count: 0,
  pages: 0,
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartThunk.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cart = payload.books;
      }
    });

    builder.addCase(changeCopyBookThunk.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });

    builder.addCase(addBookThunk.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });

    builder.addCase(getFilterBooksThunk.fulfilled, (state, { payload }) => {
      state.books = payload.books;
      state.count = payload.counterBooks;
      state.pages = payload.numberPages;
    });
  },
});

export const booksSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
