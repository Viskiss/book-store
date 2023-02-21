export const navigationRoutes = {
  home: '/',
  signUp: '/sign-up',
  signIn: '/sign-in',
  cart: '/cart',
  profile: '/profile',
  currentBook: '/book/:bookId',
  favorite: '/favorite-book',
};

export const localTheme = () => {
  return localStorage.getItem('theme') === 'themeDark';
};
