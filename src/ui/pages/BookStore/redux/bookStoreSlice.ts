import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import type { BookType, GenreType } from '../../../../types/book/typesBooks';
import { getAllBooksThunk, getAllGenresThunk, getFilterBooksThunk, getSelectBookThunk } from './bookStoreThunks';

const initialState = () => ({
  books: [] as BookType[],
  book: {} as BookType,
  genres: [] as GenreType[],
  authors: [] as string[],
  filter: Cookies.get('filter') || 'All',
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    filterBooks: (state, { payload }) => {
      Cookies.set('filter', payload);
    },
  },
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
