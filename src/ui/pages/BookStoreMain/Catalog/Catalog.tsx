import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';

import options from 'src/utils/lottieOptions';
import loader from 'src/ui/assets/lottieFiles/loading.json';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import constants from 'src/utils/constants';

import Filters from 'src/ui/pages/BookStoreMain/Catalog/components/Filters';
import type { FavoriteBookType } from 'src/types';
import { deleteFavoriteBook, getFavoriteBooks } from 'src/api';
import ItemBook from './components/ItemBook';

import Pagination from './components/Pagintion/Pagination';

import StyledCatalog from './Catalog.styles';
import { addBookThunk, getFilterBooksThunk } from '../redux/thunks';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = useAppSelector((state) => state.userStore.user?.id);
  const books = useAppSelector((store) => store.bookStore.books);
  const isAuth = useAppSelector((store) => store.userStore.isAuthenticated);

  const [favoriteBooks, setFavoriteBooks] = useState<FavoriteBookType[]>([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (isAuth) {
      (async () => {
        try {
          const books = await getFavoriteBooks();
          setFavoriteBooks(books.data.books);
        } catch (err) {
          const error = err as Error;
          toast.error(error.message);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const genre = searchParams.get('genres') || '';
    const select = searchParams.get('select') || 'Price';
    const search = searchParams.get('search') || '';
    const page = Number(searchParams.get('page') || 1);
    const minPrice = Number(searchParams.get('minPrice') || '7.39');
    const maxPrice = Number(searchParams.get('maxPrice') || '70.99');
    dispatch(
      getFilterBooksThunk({ genre, select, search, page, maxPrice, minPrice }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handlerDeleteFavoriteBook = (bookId: number) => {
    (async () => {
      try {
        const books = await deleteFavoriteBook(bookId);
        setFavoriteBooks(books.data.books);
      } catch (err) {
        const error = err as Error;
        toast.error(error.message);
      }
    })();
  };

  const handlerAddToCartBook = (bookId: number) => {
    if (!userId) {
      navigate(constants.routesLink.signIn);
    } else {
      dispatch(addBookThunk({ userId, bookId }));
    }
  };

  return (
    <StyledCatalog>
      <Filters />
      <div className="books-catalog">
        {!books ? (
          <Lottie style={options.loadingStyles} animationData={loader} />
        ) : (
          <div className="books-catalog__items">
            {books.map((book) => (
              <ItemBook
                setFavoriteBooks={setFavoriteBooks}
                setAddToCartBook={handlerAddToCartBook}
                setDeleteBook={handlerDeleteFavoriteBook}
                favoriteBooks={favoriteBooks}
                books={book}
                key={book.id}
              />
            ))}
          </div>
        )}
      </div>
      <Pagination />
    </StyledCatalog>
  );
};

export default Catalog;
