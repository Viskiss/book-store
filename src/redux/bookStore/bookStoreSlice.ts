import { createSlice } from '@reduxjs/toolkit';
import type { BookType } from '../../typesBooks';
import { getAllBooksThunk } from './bookStoreThunks';

const initialState = () => ({
  books: [] as BookType[],
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload.book;
    });
  },
});

export const storeSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
