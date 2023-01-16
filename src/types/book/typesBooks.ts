export type BookType = {
  id: number;
  title: string;
  author: string;
  price : string;
  text: string;
  rate: number;
  cover: string;
  date: Date;
  status: string;
  genre: string;
};

export type AutReqType = {
  books: BookType[];
};

export type BookIdType = {
  id: BookType['id'];
};

export type SelectBookReqType = {
  book: BookType;
};
