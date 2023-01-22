import type { FilterType } from 'types/typesBooks';
import type { GenreType, BookType } from 'types';
import type { AxiosRequestConfig } from 'axios';

import api from 'api/api';

const AUTH_PATH_PREFIX = '/book';

type GetFilteredBooksType = {
  books: BookType[];
  count: number;
  pages: number;
};

const getAllBooks = () => {
  return api.get<{books: BookType[]}>(`${AUTH_PATH_PREFIX}/books`);
};

const getAllGernes = () => {
  return api.get<{genres: GenreType[]}>(`${AUTH_PATH_PREFIX}/gernes`);
};

const getSelectBook = (bookId: number) => {
  return api.get<{book: BookType}>(`${AUTH_PATH_PREFIX}/${bookId}`);
};

const getFilterBooks = (filters: FilterType) => {
  return api.get<GetFilteredBooksType>(`${AUTH_PATH_PREFIX}/filter`, { params: { ...filters } }as AxiosRequestConfig);
};

export default {
  getAllBooks,
  getSelectBook,
  getAllGernes,
  getFilterBooks,
};
