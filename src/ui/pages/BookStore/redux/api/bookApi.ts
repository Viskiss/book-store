import type { SelectBookReqType, AutReqType } from '../../../../../types/book/typesBooks';
import api from '../../../../../api/api';

const AUTH_PATH_PREFIX = '/book';

const getAllBooks = () => {
  return api.get<AutReqType>(`${AUTH_PATH_PREFIX}/books`);
};

const getSelectBook = (bookId: number) => {
  return api.get<SelectBookReqType>(`${AUTH_PATH_PREFIX}/${bookId}`);
};

export default {
  getAllBooks,
  getSelectBook,
};
