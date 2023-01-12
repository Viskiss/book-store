import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import bookApi from '../../api/book/booksApi';

export const getAllBooksThunk = createAsyncThunk(
  'books/allBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookApi.allBooks();
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
