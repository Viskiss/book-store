import api from 'src/api/api';

import type { LikedBookType } from 'src/types/bookStoreTypes';

const LIKED_PATH_PREFIX = '/liked';

const getLikedBooks = () => {
  return api.get<{books: LikedBookType[]}>(`${LIKED_PATH_PREFIX}/books`);
};

const addLikedBook = (bookId: number) => {
  return api.post<{books: LikedBookType[]}>(`${LIKED_PATH_PREFIX}/add/${bookId}`);
};

const deleteLikedBook = (bookId: number) => {
  return api.delete<{books: LikedBookType[]}>(`${LIKED_PATH_PREFIX}/delete/${bookId}`);
};

export default {
  getLikedBooks,
  addLikedBook,
  deleteLikedBook,
};
