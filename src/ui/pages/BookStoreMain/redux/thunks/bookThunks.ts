import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type { FilterType } from 'src/types/bookStoreTypes';

import bookApi from 'src/api/requests/bookApi';

export const getFilteredBooksThunk = createAsyncThunk(
  'book/getFilterBooks',
  async (filterData: FilterType, { rejectWithValue }) => {
    try {
      const books = await bookApi.getFilteredBooks(filterData);
      return books.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);
