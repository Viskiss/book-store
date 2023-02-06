import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { FilterType } from 'src/types';

import { getAllBooks, getFilterBooks, getSelectBook } from 'src/api';

export const getAllBooksThunk = createAsyncThunk(
  'book/getAllBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await getAllBooks();
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
  async (filterData: FilterType, { rejectWithValue }) => {
    try {
      const books = await getFilterBooks(filterData);
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

export const getSelectBookThunk = createAsyncThunk(
  'book/selectBook',
  async (id: number, { rejectWithValue }) => {
    try {
      const book = await getSelectBook(id);
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
