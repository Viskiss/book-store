import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { FilterType } from 'src/types/bookStoreTypes';

import { getFilteredBooks } from 'src/api/apiRequests/bookApi';

export const getFilterBooksThunk = createAsyncThunk(
  'book/getFilterBooks',
  async (filterData: FilterType, { rejectWithValue }) => {
    try {
      const books = await getFilteredBooks(filterData);
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
