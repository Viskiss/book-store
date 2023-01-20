import { createSlice } from '@reduxjs/toolkit';

import type { BookType, GenreType } from '../../../../types/typesBooks';
import { getAllBooksThunk, getAllGenresThunk, getFilterBooksThunk, getSelectBookThunk } from './bookStoreThunks';

const initialState = () => ({
  books: [] as BookType[],
  book: {} as BookType,
  genres: [] as GenreType[],
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.fulfilled, (state, { payload }) => {
      state.books = payload.books;
    });

    builder.addCase(getFilterBooksThunk.fulfilled, (state, { payload }) => {
      state.books = payload.books;
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
