import { createSlice } from '@reduxjs/toolkit';

import type { BookType, CartType } from 'src/types/bookStoreTypes';

import {
  getCartThunk,
  addBookToCartThunk,
  changeCopyBookThunk,
} from './thunks/cartThunks';

import {
  getFilteredBooksThunk,
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
    builder.addCase(getFilteredBooksThunk.fulfilled, (state, { payload }) => {
      state.books = payload.books;
      state.count = payload.counterBooks;
      state.pages = payload.numberPages;
    });

    builder.addCase(getCartThunk.fulfilled, (state, { payload }) => {
      if (payload) {
        state.cart = payload.books;
      }
    });

    builder.addCase(changeCopyBookThunk.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });

    builder.addCase(addBookToCartThunk.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });
  },
});

export const booksSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
