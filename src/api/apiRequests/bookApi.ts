import type { AxiosRequestConfig } from 'axios';

import type { GenreType, BookType, FilterType } from 'src/types';

import api from 'src/api/api';

const BOOK_PATH_PREFIX = '/book';

type GetFilteredBooksType = {
  books: BookType[];
  counterBooks: number;
  numberPages: number;
};

export const getAllBooks = () => {
  return api.get<{ books: BookType[] }>(`${BOOK_PATH_PREFIX}/all`);
};

export const getRecommendedBooks = (userId: number) => {
  return api.get<{ books: BookType[] }>(
    `${BOOK_PATH_PREFIX}/recommend/${userId}`,
  );
};

export const getAllGernes = () => {
  return api.get<{ genres: GenreType[] }>(`${BOOK_PATH_PREFIX}/genres`);
};

export const getSelectBook = (bookId: number) => {
  return api.get<{book: BookType}>(`${BOOK_PATH_PREFIX}/${bookId}`);
};

export const getFilterBooks = (filters: FilterType) => {
  return api.get<GetFilteredBooksType>(`${BOOK_PATH_PREFIX}/filter`, {
    params: { ...filters },
  } as AxiosRequestConfig);
};
