import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import type { CommentApiType } from 'src/types/commentsTypes';

import commentApi from '../api/commentApi';

export const addCommentThunk = createAsyncThunk(
  'book/getAllBooks',
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
