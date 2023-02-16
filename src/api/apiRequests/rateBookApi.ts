import api from 'src/api/api';
import type { RateBookType } from 'src/types/bookStoreTypes';

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
