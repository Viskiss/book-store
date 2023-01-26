import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { AddBookType } from 'src/types';

import cartApi from '../api/cartApi';

export const addBookThunk = createAsyncThunk(
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

export const addCopyBook = createAsyncThunk(
  'cart/copyBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      await cartApi.addCopy(bookId);
      return;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteCopyBook = createAsyncThunk(
  'cart/copyBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      await cartApi.deleteCopy(bookId);
      return;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteBookInCart = createAsyncThunk(
  'cart/deleteBook',
  async (cartId: number, { rejectWithValue }) => {
    try {
      await cartApi.deleteBook(cartId);
      return;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);
