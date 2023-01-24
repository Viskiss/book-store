import api from 'src/api/api';

import type { BookType, CartType } from 'src/types';

const CART_PATH_PREFIX = '/cart';

const addBook = (userId: number, bookId: number) => {
  return api.post<{book: BookType[]}>(`${CART_PATH_PREFIX}/add`, { userId, bookId });
};

const getCartBooks = (userId: number) => {
  return api.get<{books: CartType[]}>(`${CART_PATH_PREFIX}/${userId}`, { params: { userId } });
};

export default {
  addBook,
  getCartBooks,
};
