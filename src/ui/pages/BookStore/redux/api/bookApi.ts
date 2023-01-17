import type { SelectBookReqType, AutReqType, GenresType } from '../../../../../types/book/typesBooks';
import api from '../../../../../api/api';

const AUTH_PATH_PREFIX = '/book';

const getAllBooks = () => {
  return api.get<AutReqType>(`${AUTH_PATH_PREFIX}/books`);
};

const getAllGernes = () => {
  return api.get<GenresType>(`${AUTH_PATH_PREFIX}/gernes`);
};

const getSelectBook = (bookId: number) => {
  return api.get<SelectBookReqType>(`${AUTH_PATH_PREFIX}/${bookId}`);
};

const getFilterBooks = (gerne: string) => {
  return api.get<AutReqType>(`${AUTH_PATH_PREFIX}/books/${gerne}`);
};

export default {
  getAllBooks,
  getSelectBook,
  getAllGernes,
  getFilterBooks,
};
