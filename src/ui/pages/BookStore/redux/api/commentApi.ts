import api from 'src/api/api';
import type { CommentType } from 'src/types';

const COMMENT_PATH_PREFIX = '/comment';

const addComment = (data: {userId: number; bookId: number; text: string}) => {
  return api.post<CommentType[]>(`${COMMENT_PATH_PREFIX}/add`, data);
};

const getComments = (bookId: number) => {
  return api.get<CommentType[]>(`${COMMENT_PATH_PREFIX}/comments/${bookId}`);
};
export default {
  addComment,
  getComments,
};
