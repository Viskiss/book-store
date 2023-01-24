import { createSlice } from '@reduxjs/toolkit';

import type { BookType, CartType, GenreType } from 'src/types';

import { getAllGenresThunk, getFilterBooksThunk, getSelectBookThunk } from './thunks/bookStoreThunks';
import { getCartBooks } from './thunks/cartThunks';

const initialState = () => ({
  books: [] as BookType[],
  book: {} as BookType,
  cart: [] as CartType[],
  genres: [] as GenreType[],
  count: 0,
  pages: 0,
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartBooks.fulfilled, (state, { payload }) => {
      state.cart = payload.books;
    });

    builder.addCase(getFilterBooksThunk.fulfilled, (state, { payload }) => {
      state.books = payload.books;
      state.count = payload.count;
      state.pages = payload.pages;
    });

    builder.addCase(getAllGenresThunk.fulfilled, (state, { payload }) => {
      state.genres = payload.genres;
    });

    builder.addCase(getSelectBookThunk.fulfilled, (state, { payload }) => {
      state.book = payload.book;
    });
  },
});

export const booksSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
