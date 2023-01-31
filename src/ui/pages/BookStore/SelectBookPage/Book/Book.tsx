import { useAppDispatch, useAppSelector } from 'src/redux/store';

import Button from 'src/ui/components/Button';

import { useNavigate } from 'react-router-dom';
import constants from 'src/utils/constants';
import StyledBook from './Book.styles';
import StarRate from '../../../../components/Rating/StarRate';
import { addBookThunk, getCartBooks } from '../../redux/thunks/cartThunks';

const Book: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const book = useAppSelector((store) => store.bookStore.book);
  const cart = useAppSelector((store) => store.bookStore.cart);
  const user = useAppSelector((store) => store.userStore.user);

  const selectBookInCart = cart.map((book) => book.bookId);
  const selectBooks = selectBookInCart.includes(book.id);

  const handlerAddToCart = (
    e: React.MouseEvent<HTMLElement>,
    bookId: number,
  ) => {
    e.preventDefault();
    if (!user) {
      navigate(constants.routesLink.signIn);
    }
    dispatch(addBookThunk({ userId: user?.id || 0, bookId }));
    dispatch(getCartBooks(user?.id || 0));
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
      <div>
        <img className="book-cover" src={book.cover} alt="" />
      </div>
      <div className="book-info">
        <h2 className="title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <div>
          <StarRate />
          <img src="" alt="" />
        </div>
        <p className="description">Description</p>
        <p className="text">{book.text}</p>
        <div className="buttons-box">
          <div>
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
