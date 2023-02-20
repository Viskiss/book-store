import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import AuthBanner from './components/AuthBanner/AuthBanner';
import BookBaner from './components/BookBanner/BookBanner';
import Catalog from './components/Catalog';

import StyledBookStore from './BookStoreMain.styles';
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
