import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import constants from 'src/utils/constants';

import Button from 'src/ui/components/Button';
import StarRate from 'src/ui/components/Rating';

import { addBookThunk, getCart } from 'src/ui/pages/BookStore/redux/thunks';
import { useEffect, useState } from 'react';
import { getRate } from 'src/api';
import { toast } from 'react-toastify';
import StyledBook from './Book.styles';

const Book: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { bookId } = useParams();

  const [rate, setRate] = useState(0);

  const book = useAppSelector((store) => store.bookStore.book);
  const cart = useAppSelector((store) => store.bookStore.cart);
  const user = useAppSelector((store) => store.userStore.user);

  const selectBookInCart = cart.map((book) => book.bookId);
  const selectBooks = selectBookInCart.includes(book.id);

  useEffect(() => {
    (async () => {
      try {
        if (user && bookId) {
          const rate = await getRate(user.id, Number(bookId));
          setRate(rate.data.rate);
        }
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [bookId, user]);

  const handlerAddToCart = (
    e: React.MouseEvent<HTMLElement>,
    bookId: number,
  ) => {
    e.preventDefault();
    if (!user) {
      navigate(constants.routesLink.signIn);
    }
    dispatch(addBookThunk({ userId: user?.id || 0, bookId }));
    dispatch(getCart(user?.id || 0));
  };

  const checkedCart = () => {
    if (!book.id || selectBooks) {
      return true;
    }
    return false;
  };

  const checkedButton = () => {
    if (selectBooks) {
      return 'Added to cart';
    }
    return `$ ${book.price} USD`;
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
        <StarRate rate={rate} />
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
                onClick={(e) => handlerAddToCart(e, book.id)}
                disabled={checkedCart()}
                className="simple-button"
              >
                {checkedButton()}
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
                onClick={(e) => handlerAddToCart(e, book.id)}
                disabled={checkedCart()}
                className="simple-button"
              >
                {checkedButton()}
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
