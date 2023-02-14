import api from 'src/api/api';
import type { CommentType } from 'src/types';

const COMMENT_PATH_PREFIX = '/comment';

export const getComments = (bookId: number) => {
  return api.get<CommentType[]>(`${COMMENT_PATH_PREFIX}/comments/${bookId}`);
};
