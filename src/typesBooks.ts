export type BookType = {
  id: number;
  title: string;
  author: string;
  text: string;
  rate: number;
  img: string;
  price : string;
};

export type AutReqType = {
  book: BookType[];
};
