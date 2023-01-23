import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import cartApi from '../api/cartApi';

type AddBookType = {
  userId: number;
  bookId: number;
};

export const AddBookThunk = createAsyncThunk(
  'cart/addBook',
  async (data: AddBookType, { rejectWithValue }) => {
    const { userId, bookId } = data;
    try {
      const cart = await cartApi.addBook(userId, bookId);
      return cart.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const getCartBooks = createAsyncThunk(
  'cart/cartBooks',
  async (userId: number, { rejectWithValue }) => {
    try {
      const cart = await cartApi.getCartBooks(userId);
      return cart.data;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
