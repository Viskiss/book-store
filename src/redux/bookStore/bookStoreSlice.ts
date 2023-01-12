import { createSlice } from '@reduxjs/toolkit';
import type { BookType } from '../../types/book/typesBooks';
// import { getAllBooksThunk } from './bookStoreThunks';

const initialState = () => ({
  books: [] as BookType[],
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: () => {
    // builder.addCase(getAllBooksThunk.fulfilled, (state, action) => {
    // });
  },
});

export const storeSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
