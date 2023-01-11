import { useEffect, useState } from 'react';

import { useAppSelector } from '../../../redux/store';

import AuthBanner from './Banners/AuthBanner';
import BookBaner from './Banners/BookBanner';

import Styles from './BookStore.styles';

const BookStore: React.FC = () => {
  const [isAuthLayout, setIsAuth] = useState(false);
  const isAuth = useAppSelector((store) => store.userRoot.user?.email);

  useEffect(() => {
    if (isAuth) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <Styles>
      <BookBaner />
      {!isAuthLayout && <AuthBanner />}
    </Styles>
  );
};

export default BookStore;
