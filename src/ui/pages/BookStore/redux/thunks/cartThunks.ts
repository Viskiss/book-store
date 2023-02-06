import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { AddBookType } from 'src/types';

import { addBook, addCopy, deleteBook, deleteCopy, getCartBooks } from 'src/api';

export const addBookThunk = createAsyncThunk(
  'cart/addBookInCart',
  async (data: AddBookType, { rejectWithValue }) => {
    const { userId, bookId } = data;
    try {
      const cart = await addBook(userId, bookId);
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

export const getCart = createAsyncThunk(
  'cart/cartBooks',
  async (userId: number, { rejectWithValue }) => {
    try {
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

export const addCopyBook = createAsyncThunk(
  'cart/copyBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await addCopy(bookId);
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
      const books = await deleteCopy(bookId);
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
