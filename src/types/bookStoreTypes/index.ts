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
  userId: number;
  bookId: number;
};

export type CartType = {
  cover: string;
  bookId: number;
  id: number;
  price: string;
  title: string;
  author: string;
  quantityOfGoods: number;
  userId: number;
};
