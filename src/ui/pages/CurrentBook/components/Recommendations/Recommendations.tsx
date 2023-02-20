import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import bookApi from 'src/api/requests/bookApi';
import favoriteBookApi from 'src/api/requests/favoriteBooksApi';

import { navigationRoutes } from 'src/utils/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/store';

import type { BookType, FavoriteBookType } from 'src/types/bookStoreTypes';

import ItemBook from '../../../BookStoreMain/components/Catalog/components/ItemBook';
import { addBookToCartThunk } from '../../../BookStoreMain/redux/thunks/cartThunks';

import StyledRecBooks from './RecommendBooks.styles';

const RecommendBooks: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [books, setBooks] = useState<BookType[]>([]);

  const userId = useAppSelector((state) => state.userStore.user?.id);

  const [favoriteBooks, setFavoriteBooks] = useState<FavoriteBookType[]>([]);

  useEffect(() => {
    if (userId) {
      (async () => {
        try {
          const books = await favoriteBookApi.getFavoriteBooks();
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
    (async () => {
      try {
        if (!books.length) {
          const books = await bookApi.getRecommendedBooks(userId || 1);
          setBooks(books.data.books);
        }
      } catch (err) {
        const error = err as Error;
        toast.error(error.message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerDeleteFavoriteBook = (bookId: number) => {
    (async () => {
      try {
        await favoriteBookApi.deleteFavoriteBook(bookId);
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
      dispatch(addBookToCartThunk({ userId, bookId }));
    }
  };

  return (
    <StyledRecBooks>
      <h2 className="recommendations__title">Recommendations</h2>
      <div className="recommend-books__items">
        {books.map((book) => (
          <ItemBook
            setFavoriteBooks={setFavoriteBooks}
            setAddToCartBook={handlerAddToCartBook}
            favoriteBooks={favoriteBooks}
            setDeleteBook={handlerDeleteFavoriteBook}
            books={book}
            key={book.id}
          />
        ))}
      </div>
    </StyledRecBooks>
  );
};

export default RecommendBooks;
