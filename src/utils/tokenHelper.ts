import Cookies from 'js-cookie';

const tokenHelper = {
  get: () => { Cookies.get('token'); },
  set: (token: string) => { Cookies.set('token', token); } };

export default {
  token: tokenHelper,
};
