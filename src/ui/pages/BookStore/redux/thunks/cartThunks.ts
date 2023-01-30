import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { AddBookType } from 'src/types';

import cartApi from '../api/cartApi';

export const addBookThunk = createAsyncThunk(
  'cart/addBookInCart',
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
      const books = await cartApi.addCopy(bookId);
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

export const deleteCopyBook = createAsyncThunk(
  'cart/deleteCopyBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await cartApi.deleteCopy(bookId);
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

export const deleteBookInCart = createAsyncThunk(
  'cart/deleteBook',
  async (cartId: number, { rejectWithValue }) => {
    try {
      const books = await cartApi.deleteBook(cartId);
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
