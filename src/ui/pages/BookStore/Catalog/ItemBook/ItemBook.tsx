import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

import Button from 'src/ui/components/Button';

import like from 'src/ui/assets/images/icon/Heart.svg';
import fillLike from 'src/ui/assets/images/icon/fillHeart.svg';

import constants from 'src/utils/constants';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { getSelectBookThunk } from '../../redux/thunks/bookStoreThunks';

import { addBookThunk, getCartBooks } from '../../redux/thunks/cartThunks';

import StyledItemBook from './ItemBook.styles ';

interface IProps {
  cover: string;
  title: string;
  author: string;
  rate: number;
  price: string;
  id: number;
}

const ItemBook: React.FC<IProps> = (props: IProps) => {
  const [rating] = useState(props.rate);
  const [likedBook, setLikedBook] = useState(false);
  const [likeImg, setLikeImg] = useState(like);

  const cart = useAppSelector((store) => store.bookStore.cart);
  const user = useAppSelector((store) => store.userStore.user);

  const selectBookInCart = cart.map((book) => book.bookId);
  const selectBooks = selectBookInCart.includes(props.id);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const selectBook = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    dispatch(getSelectBookThunk(id));
    navigate(`/book/${id}`);
  };

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

  const handlerLikeBook = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!user) {
      navigate(constants.routesLink.signIn);
    }
    if (likedBook) {
      setLikedBook(false);
      setLikeImg(like);
    } else {
      setLikedBook(true);
      setLikeImg(fillLike);
    }
  };

  const checkedCart = () => {
    if (!props.id || selectBooks) {
      return true;
    }
    return false;
  };

  const checkedButton = () => {
    if (selectBooks) {
      return 'Added to cart';
    }
    return `${props.price} USD`;
  };

  return (
    <StyledItemBook>
      <div className="cover-book">
        <Button
          onClick={(e) => handlerLikeBook(e)}
          className="cover-book__like"
        >
          <img src={likeImg} alt="Heart" />
        </Button>
        <img className="cover" src={props.cover} alt="" />
      </div>
      <div className="book-info">
        <Link
          onClick={(e) => selectBook(e, props.id)}
          className="book-title"
          to="/book"
        >
          {props.title}
        </Link>
        <p className="book-author">{props.author}</p>
        <div className="books-rate">
          <Rating
            readonly
            fillColor="#BFCC94"
            className="rate"
            initialValue={rating}
          />
          <span className="rate-number">{props.rate}.0</span>
        </div>
        <Button
          className="catalog-button"
          onClick={(e) => handlerAddToCart(e, props.id)}
          disabled={checkedCart()}
        >
          {checkedButton()}
        </Button>
      </div>
    </StyledItemBook>
  );
};

export default ItemBook;
