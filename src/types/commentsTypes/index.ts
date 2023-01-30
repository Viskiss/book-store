import type { BookType, UserType } from '../index';

export type CommentApiType = {
  userId: number;
  bookId: number;
  text: string;
};

export type CommentType = {
  id: number;
  text: string;
  bookId: BookType['id'];
  userId: UserType['id'];
  createdTime: string;
  user: UserType;
};
