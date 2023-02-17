import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import AuthBanner from './Banners/AuthBanner/AuthBanner';
import BookBaner from './Banners/BookBanner/BookBanner';
import Catalog from './Catalog/Catalog';

import StyledBookStore from './BookStore.styles';
import { getCartThunk } from './redux/thunks/cartThunks';

const BookStoreMain: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    dispatch(getCartThunk(user?.id || 0));
  }, [dispatch, user]);

  return (
    <StyledBookStore>
      <BookBaner />
      <Catalog />
      {!user && <AuthBanner />}
    </StyledBookStore>
  );
};

export default BookStoreMain;
