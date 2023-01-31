import { createSlice } from '@reduxjs/toolkit';

import type { BookType, CartType, CommentType, GenreType } from 'src/types';
import type { LikedBookType } from 'src/types/bookStoreTypes';

import {
  getAllGenresThunk,
  getFilterBooksThunk,
  getRecommendedBooksThunk,
  getSelectBookThunk,
} from './thunks/bookStoreThunks';
import {
  deleteBookInCart,
  getCartBooks,
  addCopyBook,
  deleteCopyBook,
  addBookThunk,
} from './thunks/cartThunks';
import { getCommentsThunk } from './thunks/commentsThunks';
import {
  addLikedBookThunk,
  deleteLikedBookThunk,
  getLikedBooksThunk,
} from './thunks/likedBooksThunks';

const initialState = () => ({
  books: [] as BookType[],
  recBooks: [] as BookType[],
  book: {} as BookType,
  cart: [] as CartType[],
  genres: [] as GenreType[],
  comments: [] as CommentType[],
  likedBooks: [] as LikedBookType[],
  count: 0,
  pages: 0,
});

const bookStoreSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLikedBooksThunk.fulfilled, (state, { payload }) => {
      state.likedBooks = payload.books;
    });

    builder.addCase(deleteLikedBookThunk.fulfilled, (state, { payload }) => {
      state.likedBooks = payload.books;
    });

    builder.addCase(addLikedBookThunk.fulfilled, (state, { payload }) => {
      state.likedBooks = payload.books;
    });

    builder.addCase(getCartBooks.fulfilled, (state, { payload }) => {
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

    builder.addCase(
      getRecommendedBooksThunk.fulfilled,
      (state, { payload }) => {
        state.recBooks = payload.books;
      },
    );

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

    builder.addCase(getCommentsThunk.fulfilled, (state, { payload }) => {
      state.comments = payload;
    });
  },
});

export const booksSliceActions = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
