import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import likedBooksApi from '../api/likedBooksApi';

export const addLikedBookThunk = createAsyncThunk(
  'liked/addBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await likedBooksApi.addLikedBook(bookId);
      return books.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteLikedBookThunk = createAsyncThunk(
  'liked/deleteBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await likedBooksApi.deleteLikedBook(bookId);
      return books.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const getLikedBooksThunk = createAsyncThunk(
  'liked/getBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await likedBooksApi.getLikedBooks();
      return books.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
