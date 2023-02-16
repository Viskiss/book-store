import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import {
  addBooktoCart,
  changeCopyBook,
  deleteBook,
  getCartBooks,
} from 'src/api/apiRequests/cartApi';

import type { AddBookType, ChangeCopyBookType } from 'src/types/bookStoreTypes';
import tokenHelper from 'src/utils/tokenHelper';

export const addBookThunk = createAsyncThunk(
  'cart/addBookInCart',
  async (data: AddBookType, { rejectWithValue }) => {
    const { userId, bookId } = data;
    try {
      const cart = await addBooktoCart(userId, bookId);
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

export const getCartThunk = createAsyncThunk(
  'cart/cartBooks',
  async (userId: number, { rejectWithValue }) => {
    try {
      const token = tokenHelper.token.get();
      if (!token) {
        return null;
      }
      const cart = await getCartBooks(userId);
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

export const deleteBookInCartThunk = createAsyncThunk(
  'cart/deleteBook',
  async (cartId: number, { rejectWithValue }) => {
    try {
      const books = await deleteBook(cartId);
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

export const changeCopyBookThunk = createAsyncThunk(
  'cart/changeCopyBook',
  async (data: ChangeCopyBookType, { rejectWithValue }) => {
    const { bookId, mark } = data;
    try {
      const books = await changeCopyBook({ bookId, mark });
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
