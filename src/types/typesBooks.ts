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
