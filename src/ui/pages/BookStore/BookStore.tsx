import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/store';

import AuthBanner from './Banners/AuthBanner';
import BookBaner from './Banners/BookBanner';

import StyledBookStore from './BookStore.styles';
import Catalog from './Catalog/Catalog';
import { getAllBooksThunk } from './redux/bookStoreThunks';

const BookStore: React.FC = () => {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((store) => store.userRoot.user);
  const books = useAppSelector((store) => store.bookStore.books);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getAllBooksThunk());
    }
  });

  return (
    <StyledBookStore>
      <BookBaner />
      <Catalog />
      {!isAuth && <AuthBanner />}
    </StyledBookStore>
  );
};

export default BookStore;
