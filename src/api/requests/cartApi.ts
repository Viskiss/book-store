import api from 'src/api/api';

import type { CartType } from 'src/types/bookStoreTypes';

const CART_PATH_PREFIX = '/cart';

export const addBookToCart = (userId: number, bookId: number) => {
  return api.post<{ books: CartType[] }>(`${CART_PATH_PREFIX}/add`, {
    userId,
    bookId,
  });
};

export const getCartBooks = (userId: number) => {
  return api.get<{ books: CartType[] }>(`${CART_PATH_PREFIX}/${userId}`, {
    params: { userId },
  });
};

export const deleteBook = (cartId: number) => {
  return api.delete<{ books: CartType[] }>(
    `${CART_PATH_PREFIX}/delete/${cartId}`,
  );
};

export const changeCopyBook = (data: {bookId: number; mark: number}) => {
  return api.patch<{ books: CartType[] }>(`${CART_PATH_PREFIX}/change-copy/${data.bookId}/${data.mark}`);
};
