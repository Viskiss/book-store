import { createSlice } from '@reduxjs/toolkit';
import type { BookType } from '../../../../types/book/typesBooks';
import { getAllBooksThunk } from './bookStoreThunks';

const initialState = () => ({
  books: [] as BookType[],
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooksThunk.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-console
      console.log(payload.books);
      state.books = payload.books;
    });
  },
});

export const storeSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
