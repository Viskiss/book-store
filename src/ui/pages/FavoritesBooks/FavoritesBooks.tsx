import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import TextBlock from 'src/ui/components/TextBlock';

import bookApi from 'src/api/requests/favoriteBooksApi';
import type { FavoriteBookType } from 'src/types/bookStoreTypes';

import booksImg from 'src/ui/assets/images/books.svg';

import ItemFavorite from './ItemFavorit';

import StyledFavoriteBooks from './FavoritesBooks.styles';

const FavoriteBooks: React.FC = () => {
  const [favoriteBooks, setFavoriteBooks] = useState<FavoriteBookType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const books = await bookApi.getFavoriteBooks();
        setFavoriteBooks(books.data.books);
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
        const books = await bookApi.deleteFavoriteBook(bookId);
        setFavoriteBooks(books.data.books);
      } catch (err) {
        const error = err as Error;
        toast.error(error.message);
      }
    })();
  };

  return (
    <StyledFavoriteBooks>
      {favoriteBooks.length ? (
        <div className="favorite__books">
          {favoriteBooks.map((item) => (
            <ItemFavorite
              setDeleteBook={handlerDeleteFavoriteBook}
              author={item.book.author}
              title={item.book.title}
              bookId={item.book.id}
              cover={item.book.cover}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <div className="favorite-container">
          <img className="favorite-container__img" src={booksImg} alt="" />
          <TextBlock
            h1="Your liked is empty"
            className="simple-button"
            link="/"
            title="Go to catalog"
            p="Add items to liked to make a purchase.Go to the catalogue no."
            key={0}
          />
        </div>
      )}
    </StyledFavoriteBooks>
  );
};

export default FavoriteBooks;
