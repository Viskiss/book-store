import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from 'src/ui/components/Button';

import like from 'src/ui/assets/images/icon/Heart.svg';
import fillLike from 'src/ui/assets/images/icon/fillHeart.svg';

import constants from 'src/utils/constants';
import tokenHelper from 'src/utils/tokenHelper';

import type { LikedBookType } from 'src/types';
import { useAppDispatch, useAppSelector } from 'src/redux/store';

import star from 'src/ui/assets/images/icon/Star.svg';
import emptyStar from 'src/ui/assets/images/icon/EmptyStar.svg';

import StyledItemBook from './ItemBook.styles ';

import {
  addBookThunk,
  addLikedBookThunk,
} from '../../../redux/thunks';

interface IProps {
  cover: string;
  title: string;
  author: string;
  date: Date;
  rate: number;
  price: string;
  id: number;
  likedBooks: LikedBookType[];
  setDeleteBook: Dispatch<SetStateAction<number>>;
}

const ItemBook: React.FC<IProps> = ({
  cover,
  title,
  author,
  date,
  rate,
  price,
  id,
  likedBooks,
  setDeleteBook,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [likedBook, setLikedBook] = useState(false);

  const newDay = new Date('2023-01-01');

  const cart = useAppSelector((store) => store.bookStore.cart);
  const user = useAppSelector((store) => store.userStore.user);

  const selectBookInCart = cart.map((book) => book.bookId);
  const selectBooks = selectBookInCart.includes(id);

  const selectBookLiked = likedBooks.map((book) => book.book.id);
  const selectBookLike = selectBookLiked.includes(id);

  const handlerAddToCart = (
    e: React.MouseEvent<HTMLElement>,
    bookId: number,
  ) => {
    e.preventDefault();
    if (!user) {
      navigate(constants.routesLink.signIn);
    } else {
      dispatch(addBookThunk({ userId: user.id, bookId }));
    }
  };

  const handlerLikeBook = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (!user) {
      navigate(constants.routesLink.signIn);
    } else {
      dispatch(addLikedBookThunk(id));
      setLikedBook(true);
    }

    if (likedBook && selectBookLike) {
      setDeleteBook(id);
      setLikedBook(false);
    }
  };

  const selectBook = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    try {
      navigate(`/book/${id}`);
    } catch (err) {
      toast.error('Unexpected server error');
    }
  };

  const checkedCart = () => {
    if (selectBooks && tokenHelper.token.get()) {
      return true;
    }
    return false;
  };

  const checkedButton = () => {
    if (selectBooks && tokenHelper.token.get()) {
      return 'Added to cart';
    }
    return `$ ${price} USD`;
  };

  const checkLikedBook = () => {
    if (selectBookLike && tokenHelper.token.get()) {
      return fillLike;
    }
    return like;
  };

  return (
    <StyledItemBook bestrate={rate > 4} likedBook={selectBookLike}>
      <div className="cover-book">
        <Button
          onClick={(e) => handlerLikeBook(e)}
          className="cover-book__like"
        >
          <img
            className="cover-book__like-img"
            src={checkLikedBook()}
            alt="Heart"
          />
        </Button>
        <img
          onClick={(e) => selectBook(e, id)}
          className="cover"
          src={cover}
          alt=""
        />
        <img
          onClick={(e) => selectBook(e, id)}
          className="cover-duble"
          src={cover}
          alt=""
        />
        {rate > 4 && <span className="cover-book__label">Bestseller</span>}
        {new Date(date) > newDay && (
          <span className="cover-book__label">New</span>
        )}
      </div>
      <div className="book-info">
        <div className="book-info__title-box">
          <Link
            onClick={(e) => selectBook(e, id)}
            className="book-title"
            to="/book"
          >
            {title}
          </Link>
        </div>
        <div className="book-info__author-box">
          <p className="book-author">{author}</p>
        </div>
        <div className="books-rate">
          <img
            className="rate-star"
            src={rate >= 1 ? star : emptyStar}
            alt=""
          />
          <img
            className="rate-star"
            src={rate >= 2 ? star : emptyStar}
            alt=""
          />
          <img
            className="rate-star"
            src={rate >= 3 ? star : emptyStar}
            alt=""
          />
          <img
            className="rate-star"
            src={rate >= 4 ? star : emptyStar}
            alt=""
          />
          <img
            className="rate-star"
            src={rate >= 5 ? star : emptyStar}
            alt=""
          />
          <span className="rate-number">{rate}.0</span>
        </div>
        <div className="catalog-button__box">
          <Button
            className="catalog-button"
            onClick={(e) => handlerAddToCart(e, id)}
            disabled={checkedCart()}
          >
            {checkedButton()}
          </Button>
        </div>
      </div>
    </StyledItemBook>
  );
};

export default ItemBook;
