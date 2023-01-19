import Cookies from 'js-cookie';

const tokenHelper = {
  get: () => { return Cookies.get('token'); },
  set: (token: string) => { Cookies.set('token', token); },
  remove: () => { Cookies.remove('token'); },
};

export default {
  token: tokenHelper,
};
