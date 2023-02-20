import api from 'src/api/api';
import type { CommentType } from 'src/types/bookStoreTypes';

const COMMENT_PATH_PREFIX = '/comment';

const commentApi = {
  getComments: (bookId: number) => {
    return api.get<CommentType[]>(`${COMMENT_PATH_PREFIX}/comments/${bookId}`);
  },
};

export default {
  getComments: commentApi.getComments,
};
