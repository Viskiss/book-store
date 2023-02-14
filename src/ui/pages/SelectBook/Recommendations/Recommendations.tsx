import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { deleteLikedBook, getRecommendedBooks } from 'src/api';
import { useAppSelector } from 'src/redux/store';

import type { BookType } from 'src/types';

import ItemBook from 'src/ui/pages/BookStore/Catalog/components/ItemBook';

import StyledRecBooks from './RecommendBooks.styles';

const RecommendBooks: React.FC = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const user = useAppSelector((state) => state.userStore.user?.id);

  const [deleteBook, setDeleteBook] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        if (deleteBook) {
          await deleteLikedBook(deleteBook);
        }
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteBook]);

  useEffect(() => {
    (async () => {
      try {
        if (!books.length) {
          const books = await getRecommendedBooks(user || 1);
          setBooks(books.data.books);
        }
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [books.length, user]);

  return (
    <StyledRecBooks>
      <h2 className="recommendations__title">Recommendations</h2>
      <div className="recommend-books__items">
        {books.map((el) => (
          <ItemBook
            likedBooks={[]}
            setDeleteBook={setDeleteBook}
            date={el.date}
            price={el.price}
            cover={el.cover}
            author={el.author}
            rate={el.rate}
            title={el.title}
            key={el.id}
            id={el.id}
          />
        ))}
      </div>
    </StyledRecBooks>
  );
};

export default RecommendBooks;
