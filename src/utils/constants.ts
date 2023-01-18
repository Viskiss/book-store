const routes = {
  home: '/',
  signUp: '/sign-up',
  login: '/login',
  cart: '/cart',
  profile: '/profile',
  bookId: '/book/:bookId',
};

const API_URL = 'http://localhost:4000/api';

export default {
  routesLink: routes,
  api: API_URL,
};
