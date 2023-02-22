import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import type { BookType } from 'src/types/bookStoreTypes';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { navigationRoutes } from 'src/utils/constants';

import Button from 'src/ui/components/Button';
import StarRate from 'src/ui/components/Rating';

import rateBookApi from 'src/api/requests/rateBookApi';
import bookApi from 'src/api/requests/bookApi';

import {
  addBookToCartThunk,
  getCartThunk,
} from '../../../BookStoreMain/redux/thunks/cartThunks';

import StyledBook from './Book.styles';

const Book: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { bookId } = useParams();

  const [book, setBook] = useState<BookType>({} as BookType);

  const [userRate, setUserRate] = useState<number>(0);

  const cart = useAppSelector((store) => store.bookStore.cart);
  const user = useAppSelector((store) => store.userStore.user);

  const selectBookInCart = cart.find((book) => book.bookId === Number(bookId));

  useEffect(() => {
    (async () => {
      try {
        const books = await bookApi.getCurrentBook(Number(bookId));
        setBook(books.data.book);

        if (user) {
          dispatch(getCartThunk(user.id));

          const rate = await rateBookApi.getRateBook(user.id, Number(bookId));
          setUserRate(rate.data !== null ? rate.data.rate : 0);
        }
      } catch (err) {
        const error = err as Error;
        toast.error(error.message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId, dispatch]);

  const handlerAddToCart = (bookId: number) => {
    if (!user) {
      navigate(navigationRoutes.signIn);
    }
    dispatch(addBookToCartThunk({ userId: user?.id || 0, bookId }));
    dispatch(getCartThunk(user?.id || 0));
  };

  const handlerAddRateBook = async (bookId: number, rate: number) => {
    try {
      if (user) {
        await rateBookApi.addRateBook({
          userId: user?.id,
          bookId: Number(bookId),
          rate,
        });
      }
    } catch (err) {
      const error = err as Error;
      toast.error(error.message);
    }
  };

  return (
    <StyledBook>
      <div className="book-cover__box">
        <img className="book-cover" src={book.cover} alt="" />
      </div>

      <div className="book-info__data">
        <h2 className="title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
      </div>

      <div className="book-info__rate">
        <StarRate
          setRate={handlerAddRateBook}
          bookRate={book.rate}
          userRate={userRate}
        />
      </div>

      <div className="book-info__box">
        <div className="book-info__text">
          <p className="description">Description</p>
          <p className="text">{book.text}</p>
        </div>

        <div className="buttons-box">
          <div className="buttons-box__title">
            <p>Paperback</p>
            {book.status === 'Paperback' ? (
              <Button
                onClick={() => handlerAddToCart(book.id)}
                disabled={!!(!book.id || selectBookInCart)}
                className="simple-button"
              >
                {selectBookInCart ? 'Added to cart' : `$ ${book.price} USD`}
              </Button>
            ) : (
              <Button disabled className="disabled-button">
                Not available
              </Button>
            )}
          </div>

          <div>
            <p className="buttons-box__title">Hardcover</p>
            {book.status === 'Hardcover' ? (
              <Button
                onClick={() => handlerAddToCart(book.id)}
                disabled={!!(!book.id || selectBookInCart)}
                className="simple-button"
              >
                {selectBookInCart ? 'Added to cart' : `$ ${book.price} USD`}
              </Button>
            ) : (
              <Button disabled className="disabled-button">
                Not available
              </Button>
            )}
          </div>
        </div>
      </div>
    </StyledBook>
  );
};

export default Book;
