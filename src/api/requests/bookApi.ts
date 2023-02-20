import type { AxiosRequestConfig } from 'axios';

import type { GenreType, BookType, FilterType } from 'src/types/bookStoreTypes';

import api from 'src/api/api';

const BOOK_PATH_PREFIX = '/book';

type GetFilteredBooksType = {
  books: BookType[];
  counterBooks: number;
  numberPages: number;
};

const bookApi = {
  getRecommendedBooks: (userId: number) => {
    return api.get<{ books: BookType[] }>(
      `${BOOK_PATH_PREFIX}/recommend/${userId}`,
    );
  },

  getGernes: () => {
    return api.get<{ genres: GenreType[] }>(`${BOOK_PATH_PREFIX}/genres`);
  },

  getCurrentBook: (bookId: number) => {
    return api.get<{ book: BookType }>(`${BOOK_PATH_PREFIX}/${bookId}`);
  },

  getFilteredBooks: (filters: FilterType) => {
    return api.get<GetFilteredBooksType>(`${BOOK_PATH_PREFIX}/filter`, {
      params: { ...filters },
    } as AxiosRequestConfig);
  },
};

export default {
  getRecommendedBooks: bookApi.getRecommendedBooks,
  getGenres: bookApi.getGernes,
  getCurrentBook: bookApi.getCurrentBook,
  getFilteredBooks: bookApi.getFilteredBooks,
};
