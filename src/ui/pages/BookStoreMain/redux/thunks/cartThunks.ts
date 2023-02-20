import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import cartApi from 'src/api/requests/cartApi';

import type { BookType } from 'src/types/bookStoreTypes';
import type { UserType } from 'src/types/userType';

import tokenHelper from 'src/utils/tokenHelper';

export type ChangeCopyBookType = {
  bookId: number;
  mark: number;
};

export type AddBookType = {
  userId: UserType['id'];
  bookId: BookType['id'];
};

export const addBookToCartThunk = createAsyncThunk(
  'cart/addBookInCart',
  async (data: AddBookType, { rejectWithValue }) => {
    const { userId, bookId } = data;
    try {
      const cart = await cartApi.addBookToCart(userId, bookId);
      return cart.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
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
      const cart = await cartApi.getCartBooks(userId);
      return cart.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);

export const deleteBookInCartThunk = createAsyncThunk(
  'cart/deleteBook',
  async (cartId: number, { rejectWithValue }) => {
    try {
      const books = await cartApi.deleteBook(cartId);
      return books.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);

export const changeCopyBookThunk = createAsyncThunk(
  'cart/changeCopyBook',
  async (data: ChangeCopyBookType, { rejectWithValue }) => {
    const { bookId, mark } = data;
    try {
      const books = await cartApi.changeCopyBook({ bookId, mark });
      return books.data;
    } catch (err) {
      if (!(err instanceof AxiosError)) {
        throw err;
      }
      return rejectWithValue(err.response?.data);
    }
  },
);
