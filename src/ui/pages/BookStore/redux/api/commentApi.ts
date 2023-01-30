import api from 'src/api/api';

const COMMENT_PATH_PREFIX = '/comment';

const addComment = (data: {userId: number; bookId: number; text: string}) => {
  return api.post(`${COMMENT_PATH_PREFIX}/add`, data);
};
export default {
  addComment,
};
