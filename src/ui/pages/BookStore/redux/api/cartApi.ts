import api from 'api/api';
import type { BookType } from 'types';

const CART_PATH_PREFIX = '/cart';

export type CartType = {
  cover: string;
  bookId: number;
  id: number;
  price: string;
  title: string;
  author: string;
  quantityOfGoods: string;
  userId: number;
};

const addBook = (userId: number, bookId: number) => {
  return api.post<{book: BookType[]}>(`${CART_PATH_PREFIX}/add`, { userId, bookId });
};

const getCartBooks = (userId: number) => {
  return api.get<{books: CartType[]}>(`${CART_PATH_PREFIX}/${userId}`, { params: { userId } });
};

// const uploadAvatar = (avatar: string) => {
//   return api.post<{ user: UserType }>(`${USER_PATH_PREFIX}/upload`, { avatar });
// };

export default {
  addBook,
  getCartBooks,
};
