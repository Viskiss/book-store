import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { addLikedBook, deleteLikedBook } from 'src/api';

export const addLikedBookThunk = createAsyncThunk(
  'liked/addBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await addLikedBook(bookId);
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
      const books = await deleteLikedBook(bookId);
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
