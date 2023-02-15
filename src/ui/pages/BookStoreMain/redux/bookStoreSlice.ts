import { createSlice } from '@reduxjs/toolkit';

import type { BookType, CartType } from 'src/types';

import {
  getCart,
  deleteBookInCart,
  addCopyBook,
  addBookThunk,
  deleteCopyBook,
  getFilterBooksThunk,
} from './thunks';

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
    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });

    builder.addCase(deleteBookInCart.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });

    builder.addCase(addCopyBook.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });

    builder.addCase(addBookThunk.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });

    builder.addCase(deleteCopyBook.fulfilled, (state, { payload }) => {
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
