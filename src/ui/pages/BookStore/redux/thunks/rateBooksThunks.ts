import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { AddRateApiType } from 'src/types';

import rateApi from '../api/rateBookApi';

export const addRateThunk = createAsyncThunk(
  'rate/addRate',
  async (data: AddRateApiType, { rejectWithValue }) => {
    const { userId, bookId, rate } = data;
    try {
      await rateApi.addRate({ userId, bookId, rate });
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
