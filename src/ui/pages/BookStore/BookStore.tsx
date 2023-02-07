import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import { getCart } from './redux/thunks';

import AuthBanner from './Banners/AuthBanner';
import BookBaner from './Banners/BookBanner';
import Catalog from './Catalog/Catalog';

import StyledBookStore from './BookStore.styles';

const BookStore: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((store) => store.userStore.isAuthenticated);
  const user = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch(getCart(user.id));
  }, [dispatch, isAuth, user]);

  return (
    <StyledBookStore>
      <BookBaner />
      <Catalog />
      {!isAuth && <AuthBanner />}
    </StyledBookStore>
  );
};

export default BookStore;
