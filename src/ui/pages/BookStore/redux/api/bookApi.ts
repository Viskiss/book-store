import api from '../../../../../api/api';
import type { AutReqType } from '../../../../../types/book/typesBooks';

const AUTH_PATH_PREFIX = '/book';

const getAllBooks = () => {
  return api.get<AutReqType>(`${AUTH_PATH_PREFIX}/books`);
};

export default {
  getAllBooks,
};
