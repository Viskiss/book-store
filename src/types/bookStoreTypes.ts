import type { UserType } from './userType';

export type BookType = {
  id: number;
  title: string;
  author: string;
  price: string;
  text: string;
  rate: number;
  cover: string;
  date: Date;
  status: string;
  genre: string;
};

export type GenreType = {
  id: number;
  name: string;
};

export type FilterType = {
  genre?: string | null;
  select?: string | null;
  search?: string;
  page?: number;
  minPrice?: number;
  maxPrice?: number;
};

export type CartType = {
  cover: string;
  bookId: number;
  id: number;
  price: number;
  title: string;
  author: string;
  quantityOfGoods: number;
  userId: number;
};

export type FavoriteBookType = {
  book: BookType;
  bookId: BookType['id'];
  id: number;
  userId: UserType['id'];
};

export type CommentType = {
  id: number;
  text: string;
  bookId: BookType['id'];
  userId: UserType['id'];
  createdTime: string;
  user: UserType;
};
