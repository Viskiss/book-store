import api from 'src/api/api';

import type { FavoriteBookType } from 'src/types/bookStoreTypes';

const FAVORITE_PATH_PREFIX = '/favorite';

export const getFavoriteBooks = () => {
  return api.get<{ books: FavoriteBookType[] }>(`${FAVORITE_PATH_PREFIX}/favorite-books`);
};

export const addFavoriteBook = (bookId: number) => {
  return api.post<{ books: FavoriteBookType[] }>(
    `${FAVORITE_PATH_PREFIX}/add/${bookId}`,
  );
};

export const deleteFavoriteBook = (bookId: number) => {
  return api.delete<{ books: FavoriteBookType[] }>(
    `${FAVORITE_PATH_PREFIX}/delete/${bookId}`,
  );
};
