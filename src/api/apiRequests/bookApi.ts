import type { AxiosRequestConfig } from 'axios';

import type { GenreType, BookType, FilterType } from 'src/types/bookStoreTypes';

import api from 'src/api/api';

const BOOK_PATH_PREFIX = '/book';

type GetFilteredBooksType = {
  books: BookType[];
  counterBooks: number;
  numberPages: number;
};

export const getRecommendedBooks = (userId: number) => {
  return api.get<{ books: BookType[] }>(
    `${BOOK_PATH_PREFIX}/recommend/${userId}`,
  );
};

export const getGernes = () => {
  return api.get<{ genres: GenreType[] }>(`${BOOK_PATH_PREFIX}/genres`);
};

export const getCurrentBook = (bookId: number) => {
  return api.get<{book: BookType}>(`${BOOK_PATH_PREFIX}/${bookId}`);
};

export const getFilteredBooks = (filters: FilterType) => {
  return api.get<GetFilteredBooksType>(`${BOOK_PATH_PREFIX}/filter`, {
    params: { ...filters },
  } as AxiosRequestConfig);
};
