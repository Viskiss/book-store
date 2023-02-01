import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import { getAllBooksThunk } from './redux/thunks/bookStoreThunks';
import { getCartBooks } from './redux/thunks/cartThunks';

import AuthBanner from './Banners/AuthBanner';
import BookBaner from './Banners/BookBanner';
import Catalog from './Catalog/Catalog';

import StyledBookStore from './BookStore.styles';

const BookStore: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((store) => store.userStore.isAuthenticated);
  const books = useAppSelector((store) => store.bookStore.books);
  const user = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getAllBooksThunk());
    }
  });

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    dispatch(getCartBooks(user?.id || 0));
  }, [dispatch, isAuth, user?.id]);

  return (
    <StyledBookStore>
      <BookBaner />
      <Catalog />
      {!isAuth && <AuthBanner />}
    </StyledBookStore>
  );
};

export default BookStore;
