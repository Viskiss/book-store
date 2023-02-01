import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { CommentApiType } from 'src/types';

import commentApi from '../api/commentApi';

export const addCommentThunk = createAsyncThunk(
  'comment/addComment',
  async (data: CommentApiType, { rejectWithValue }) => {
    const { userId, bookId, text } = data;
    try {
      const books = await commentApi.addComment({ userId, bookId, text });
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

export const getCommentsThunk = createAsyncThunk(
  'comment/getComments',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await commentApi.getComments(bookId);
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
