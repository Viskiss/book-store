const routes = {
  home: '/',
  signUp: '/sign-up',
  signIn: '/sign-in',
  cart: '/cart',
  profile: '/profile',
  bookId: '/book/:bookId',
  likes: '/likes-book',
};

const sortList = [
  { id: 1, name: 'Price' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Author name' },
  { id: 4, name: 'Rating' },
  { id: 5, name: 'Date of issue' },
];

export default {
  sort: sortList,
  routesLink: routes,
};
