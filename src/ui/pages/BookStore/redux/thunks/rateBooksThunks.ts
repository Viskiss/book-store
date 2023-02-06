import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { AddRateApiType } from 'src/types';

import { addRate } from 'src/api';

export const addRateThunk = createAsyncThunk(
  'rate/addRate',
  async (data: AddRateApiType, { rejectWithValue }) => {
    const { userId, bookId, rate } = data;
    try {
      await addRate({ userId, bookId, rate });
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
