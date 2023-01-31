import { NamedImportBindings } from 'typescript';
import type { UserType } from '../userTypes/updateUser';

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

export type AddBookType = {
  userId: UserType['id'];
  bookId: BookType['id'];
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

export type LikedBookType = {
  book: BookType;
  bookId: BookType['id'];
  id: number;
  userId: UserType['id'];
};
