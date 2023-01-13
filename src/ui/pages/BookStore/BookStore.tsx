import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import Loading from '../../containers/Navigation/components/Loading/Loading';

import AuthBanner from './Banners/AuthBanner';
import BookBaner from './Banners/BookBanner';

import StyledBookStore from './BookStore.styles';
import ItemBook from './ItemBook/ItemBook';
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
      <div className="filter-books">
        <h2>Catalog</h2>
        <div className="books-catalog">
          {!books ? (
        <Loading />
          ) : (
        <div className="books-catalog__items">
          {books.map((el) => (
            <ItemBook
              price={el.price}
              cover={el.cover}
              author={el.author}
              rate={el.rate}
              title={el.title}
              key={el.id}
            />
          ))}
        </div>
          )}
        </div>
      </div>

      {!isAuth && <AuthBanner />}
    </StyledBookStore>
  );
};

export default BookStore;
