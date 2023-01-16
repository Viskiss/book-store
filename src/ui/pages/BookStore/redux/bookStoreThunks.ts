import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import bookApi from './api/bookApi';

export const getAllBooksThunk = createAsyncThunk(
  'book/getAllBooks',
  async (_, { rejectWithValue }) => {
    try {
      const user = await bookApi.getAllBooks();
      return user.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const getSelectBookThunk = createAsyncThunk(
  'book/selectBook',
  async (id: number, { rejectWithValue }) => {
    try {
      const user = await bookApi.getSelectBook(id);
      return user.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
