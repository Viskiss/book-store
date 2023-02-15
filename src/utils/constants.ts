export const routesLink = {
  home: '/',
  signUp: '/sign-up',
  signIn: '/sign-in',
  cart: '/cart',
  profile: '/profile',
  bookId: '/book/:bookId',
  favorite: '/favorite-book',
};

export const sort = [
  { id: 1, name: 'Price' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Author name' },
  { id: 4, name: 'Rating' },
  { id: 5, name: 'Date of issue' },
];

export default {
  sort,
  routesLink,
};
