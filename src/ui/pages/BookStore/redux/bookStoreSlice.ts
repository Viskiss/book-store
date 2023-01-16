import { createSlice } from '@reduxjs/toolkit';
import type { BookType } from '../../../../types/book/typesBooks';
import { getAllBooksThunk, getSelectBookThunk } from './bookStoreThunks';

const initialState = () => ({
  books: [] as BookType[],
  book: {} as BookType,
  genre: [] as string[],
  authors: [] as string[],
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.fulfilled, (state, { payload }) => {
      state.books = payload.books;
    });

    builder.addCase(getSelectBookThunk.fulfilled, (state, { payload }) => {
      state.book = payload.book;
    });
  },
});

export const storeSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
