import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import booksImg from 'src/ui/assets/images/books.svg';

import { deleteLikedBook, getLikedBooks } from 'src/api';
import type { LikedBookType } from 'src/types';
import TextBlock from 'src/ui/components/TextBlock';

import ItemLike from './ItemLike';

import StyledLikedBooks from './LikedBooks.styles';

const LikedBooks: React.FC = () => {
  const [likedBooks, setLikedBooks] = useState<LikedBookType[]>([]);
  const [deleteBook, setDeleteBook] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const books = await getLikedBooks();
        setLikedBooks(books.data.books);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (deleteBook) {
          const books = await deleteLikedBook(deleteBook);
          setLikedBooks(books.data.books);
        }
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteBook]);

  return (
    <StyledLikedBooks>
      {likedBooks.length ? (
        <div className="liked__books">
          {likedBooks.map((item) => (
            <ItemLike
            setDeleteBook={setDeleteBook}
              author={item.book.author}
              title={item.book.title}
              bookId={item.book.id}
              cover={item.book.cover}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <div className="like-container">
          <img className="like-container__img" src={booksImg} alt="" />
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
    </StyledLikedBooks>
  );
};

export default LikedBooks;
