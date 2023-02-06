import api from 'src/api/api';

import type { CartType } from 'src/types';

const CART_PATH_PREFIX = '/cart';

export const addBook = (userId: number, bookId: number) => {
  return api.post<{books: CartType[]}>(`${CART_PATH_PREFIX}/add`, { userId, bookId });
};

export const getCartBooks = (userId: number) => {
  return api.get<{books: CartType[]}>(`${CART_PATH_PREFIX}/${userId}`, { params: { userId } });
};

export const addCopy = (bookId: number) => {
  return api.get<{books: CartType[]}>(`${CART_PATH_PREFIX}/copy/${bookId}`);
};

export const deleteBook = (cartId: number) => {
  return api.delete<{books: CartType[]}>(`${CART_PATH_PREFIX}/delete/${cartId}`);
};

export const deleteCopy = (bookId: number) => {
  return api.delete<{books: CartType[]}>(`${CART_PATH_PREFIX}/delete-copy/${bookId}`);
};
