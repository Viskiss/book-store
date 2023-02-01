import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { AddRateApiType, GetRateApiType } from 'src/types';

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

export const getRateThunk = createAsyncThunk(
  'rate/getRate',
  async (data: GetRateApiType, { rejectWithValue }) => {
    const { userId, bookId } = data;
    try {
      const rate = await rateApi.getRate(userId, bookId);
      return rate.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
