import type { AutReqType } from '../../types/book/typesBooks';
import api from '../api';

const getAllBooksPath = '/api/book-store/books';

const allBooks = () => {
  return api.get<AutReqType>(getAllBooksPath);
};

export default {
  allBooks,
};
