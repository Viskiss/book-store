import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deleteFavoriteBook, getFavoriteBooks, getRecommendedBooks } from 'src/api';
import { useAppDispatch, useAppSelector } from 'src/redux/store';

import type { BookType, FavoriteBookType } from 'src/types';
import constants from 'src/utils/constants';

import ItemBook from 'src/ui/pages/BookStoreMain/Catalog/components/ItemBook';

import { addBookThunk } from '../../BookStoreMain/redux/thunks';

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
    (async () => {
      try {
        if (!books.length) {
          const books = await getRecommendedBooks(userId || 1);
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
        await deleteFavoriteBook(bookId);
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
