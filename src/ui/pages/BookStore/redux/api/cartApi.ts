import api from 'src/api/api';

import type { BookType, CartType } from 'src/types';

const CART_PATH_PREFIX = '/cart';

const addBook = (userId: number, bookId: number) => {
  return api.post<{book: BookType[]}>(`${CART_PATH_PREFIX}/add`, { userId, bookId });
};

const getCartBooks = (userId: number) => {
  return api.get<{books: CartType[]}>(`${CART_PATH_PREFIX}/${userId}`, { params: { userId } });
};

const addCopy = (bookId: number) => {
  return api.get(`${CART_PATH_PREFIX}copy/${bookId}`);
};

const deleteBook = (cartId: number) => {
  return api.delete(`${CART_PATH_PREFIX}/delete/${cartId}`);
};

const deleteCopy = (bookId: number) => {
  return api.delete(`${CART_PATH_PREFIX}/delete-copy/${bookId}`);
};

export default {
  addBook,
  getCartBooks,
  deleteBook,
  addCopy,
  deleteCopy,
};
