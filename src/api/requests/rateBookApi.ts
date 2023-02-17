import api from 'src/api/api';

import type { BookType } from 'src/types/bookStoreTypes';
import type { UserType } from 'src/types/userType';

export type RateBookType = {
  id: number;
  bookId: BookType['id'];
  userId: UserType['id'];
  rate: number;
};

const RATE_PATH_PREFIX = '/rating';

export const addRateBook = (data: {
  userId: number;
  bookId: number;
  rate: number;
}) => {
  return api.post(`${RATE_PATH_PREFIX}/add`, data);
};

export const getRateBook = (userId: number, bookId: number) => {
  return api.get<RateBookType>(`${RATE_PATH_PREFIX}/rate/${userId}/${bookId}`);
};
