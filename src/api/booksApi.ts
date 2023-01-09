import type { AutReqType } from '../typesBooks';
import api from './api';

const getAllBooksPath = '/api/book-store/books';

const allBooks = () => {
  return api.get<AutReqType>(getAllBooksPath);
};

export default {
  allBooks,
};
