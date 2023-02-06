import api from 'src/api/api';

import type { LikedBookType } from 'src/types/bookStoreTypes';

const LIKED_PATH_PREFIX = '/liked';

export const getLikedBooks = () => {
  return api.get<{books: LikedBookType[]}>(`${LIKED_PATH_PREFIX}/books`);
};

export const addLikedBook = (bookId: number) => {
  return api.post<{books: LikedBookType[]}>(`${LIKED_PATH_PREFIX}/add/${bookId}`);
};

export const deleteLikedBook = (bookId: number) => {
  return api.delete<{books: LikedBookType[]}>(`${LIKED_PATH_PREFIX}/delete/${bookId}`);
};
