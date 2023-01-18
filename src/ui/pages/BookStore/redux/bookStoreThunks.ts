import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import bookApi from './api/bookApi';

export const getAllBooksThunk = createAsyncThunk(
  'book/getAllBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookApi.getAllBooks();
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

export const getFilterBooksThunk = createAsyncThunk(
  'book/getFilterBooks',
  async (gerne: string[], { rejectWithValue }) => {
    try {
      const books = await bookApi.getFilterBooks(gerne);
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

export const getAllGenresThunk = createAsyncThunk(
  'book/getAllGenres',
  async (_, { rejectWithValue }) => {
    try {
      const genres = await bookApi.getAllGernes();
      return genres.data;
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
      const book = await bookApi.getSelectBook(id);
      return book.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
