import api from 'src/api/api';

import type { FavoriteBookType } from 'src/types/bookStoreTypes';

const FAVORITE_PATH_PREFIX = '/favorite';

const favoriteBooksApi = {
  getFavoriteBooks: () => {
    return api.get<{ books: FavoriteBookType[] }>(
      `${FAVORITE_PATH_PREFIX}/favorite-books`,
    );
  },

  addFavoriteBook: (bookId: number) => {
    return api.post<{ books: FavoriteBookType[] }>(
      `${FAVORITE_PATH_PREFIX}/add/${bookId}`,
    );
  },

  deleteFavoriteBook: (bookId: number) => {
    return api.delete<{ books: FavoriteBookType[] }>(
      `${FAVORITE_PATH_PREFIX}/delete/${bookId}`,
    );
  },
};

export default {
  getFavoriteBooks: favoriteBooksApi.getFavoriteBooks,
  addFavoriteBook: favoriteBooksApi.addFavoriteBook,
  deleteFavoriteBook: favoriteBooksApi.deleteFavoriteBook,
};
