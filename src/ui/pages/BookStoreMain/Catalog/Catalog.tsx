import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { navigationRoutes } from 'src/utils/constants';

import Filters from 'src/ui/pages/BookStoreMain/Catalog/components/Filters';
import type { FavoriteBookType, GenreType } from 'src/types/bookStoreTypes';

import LottieLoading from 'src/ui/components/LottieLoading';
import { getGernes } from 'src/api/apiRequests/bookApi';
import {
  deleteFavoriteBook,
  getFavoriteBooks,
} from 'src/api/apiRequests/favoriteBooksApi';
import ItemBook from './components/ItemBook';

import Pagination from './components/Pagintion/Pagination';

import StyledCatalog from './Catalog.styles';
import { getFilterBooksThunk } from '../redux/thunks/bookThunks';
import { addBookThunk } from '../redux/thunks/cartThunks';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [genres, setGenres] = useState<GenreType[]>([]);
  const [favoriteBooks, setFavoriteBooks] = useState<FavoriteBookType[]>([]);

  const userId = useAppSelector((state) => state.userStore.user?.id);
  const books = useAppSelector((store) => store.bookStore.books);

  useEffect(() => {
    (async () => {
      try {
        const genres = await getGernes();
        setGenres(genres.data.genres);
        if (userId) {
          const books = await getFavoriteBooks();
          setFavoriteBooks(books.data.books);
        }
      } catch (err) {
        const error = err as Error;
        toast.error(error.message);
      }
    })();
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
      navigate(navigationRoutes.signIn);
    } else {
      dispatch(addBookThunk({ userId, bookId }));
    }
  };

  if (!genres.length && !books) {
    return <LottieLoading />;
  }

  return (
    <StyledCatalog>
      <Filters genres={genres} />
      <div className="books-catalog">
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
      </div>
      <Pagination />
    </StyledCatalog>
  );
};

export default Catalog;
