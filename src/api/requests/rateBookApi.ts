import api from 'src/api/api';

export type RateBookType = {
  id: number;
  bookId: number;
  userId: number;
  rate: number;
};

const RATE_PATH_PREFIX = '/rating';

const rateBookApi = {
  addRateBook: (data: { userId: number; bookId: number; rate: number }) => {
    return api.post(`${RATE_PATH_PREFIX}/add`, data);
  },

  getRateBook: (userId: number, bookId: number) => {
    return api.get<RateBookType>(
      `${RATE_PATH_PREFIX}/rate/${userId}/${bookId}`,
    );
  },
};

export default {
  addRateBook: rateBookApi.addRateBook,
  getRateBook: rateBookApi.getRateBook,
};
