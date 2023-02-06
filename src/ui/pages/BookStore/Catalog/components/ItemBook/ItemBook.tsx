import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';

import Button from 'src/ui/components/Button';

import like from 'src/ui/assets/images/icon/Heart.svg';
import fillLike from 'src/ui/assets/images/icon/fillHeart.svg';

import constants from 'src/utils/constants';
import tokenHelper from 'src/utils/tokenHelper';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import { addBookThunk, getCart } from '../../../redux/thunks/cartThunks';
import { deleteLikedBookThunk, addLikedBookThunk } from '../../../redux/thunks/likedBooksThunks';

import StyledItemBook from './ItemBook.styles ';

interface IProps {
  cover: string;
  title: string;
  author: string;
  date: Date;
  rate: number;
  price: string;
  id: number;
}

const ItemBook: React.FC<IProps> = ({
  cover,
  title,
  author,
  date,
  rate,
  price,
  id,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [likedBook, setLikedBook] = useState(false);

  const newDay = new Date('2023-01-01');

  const cart = useAppSelector((store) => store.bookStore.cart);
  const likedBooks = useAppSelector((store) => store.bookStore.likedBooks);
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
      dispatch(getCart(user.id));
    }
  };

  const handlerLikeBook = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!user) {
      navigate(constants.routesLink.signIn);
    }
    if (likedBook && selectBookLike) {
      dispatch(deleteLikedBookThunk(id));
      setLikedBook(false);
    } else {
      dispatch(addLikedBookThunk(id));
      setLikedBook(true);
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
    <StyledItemBook likedBook={selectBookLike}>
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
        <img className="cover" src={cover} alt="" />
        {rate > 4 && <span className="cover-book__best">Bestseller</span>}
        {new Date(date) > newDay && (
          <span className="cover-book__new">New</span>
        )}
      </div>
      <div className="book-info">
        <Link
          onClick={(e) => selectBook(e, id)}
          className="book-title"
          to="/book"
        >
          {title}
        </Link>
        <p className="book-author">{author}</p>
        <div className="books-rate">
          <Rating
            readonly
            fillColor="#BFCC94"
            className="rate"
            initialValue={rate}
            size={28}
            fillIcon={
              (<svg
                className="fillStar"
                width="22"
                height="22"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3079 2.90797C14.5645 2.2932 15.4355 2.2932 15.6921 2.90797L18.6585 10.014C18.7611 10.2597 18.9862 10.4326 19.25 10.4683L27.0376 11.5223C27.6878 11.6103 27.9195 12.4318 27.4112 12.8466L21.3857 17.7636C21.1642 17.9443 21.0647 18.2352 21.1292 18.5137L23.0564 26.8419C23.2115 27.512 22.4579 28.02 21.8948 27.6248L15.4309 23.088C15.1723 22.9066 14.8277 22.9066 14.5691 23.088L8.10511 27.6249C7.54208 28.02 6.78848 27.5121 6.94355 26.8419L8.87063 18.5137C8.93508 18.2352 8.8356 17.9443 8.61413 17.7636L2.5888 12.8466C2.08048 12.4318 2.31222 11.6103 2.9624 11.5223L10.75 10.4683C11.0138 10.4326 11.2389 10.2597 11.3415 10.014L14.3079 2.90797Z"
                  fill="#BFCC94"
                  stroke="#BFCC94"
                  strokeWidth="1"
                  strokeMiterlimit="3.3292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
               </svg>)
            }
            emptyIcon={
              (<svg
                className="emptyStar"
                width="22"
                height="22"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3079 2.90797C14.5645 2.2932 15.4355 2.2932 15.6921 2.90797L18.6585 10.014C18.7611 10.2597 18.9862 10.4326 19.25 10.4683L27.0376 11.5223C27.6878 11.6103 27.9195 12.4318 27.4112 12.8466L21.3857 17.7636C21.1642 17.9443 21.0647 18.2352 21.1292 18.5137L23.0564 26.8419C23.2115 27.512 22.4579 28.02 21.8949 27.6248L15.4309 23.088C15.1723 22.9066 14.8277 22.9066 14.5691 23.088L8.10511 27.6249C7.54207 28.02 6.78848 27.5121 6.94355 26.8419L8.87063 18.5137C8.93508 18.2352 8.8356 17.9443 8.61413 17.7636L2.5888 12.8466C2.08048 12.4318 2.31222 11.6103 2.9624 11.5223L10.75 10.4683C11.0138 10.4326 11.2389 10.2597 11.3415 10.014L14.3079 2.90797Z"
                  stroke="#BFCC94"
                  strokeWidth="1"
                  strokeMiterlimit="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
               </svg>)
            }
          />
          <span className="rate-number">{rate}.0</span>
        </div>
        <Button
          className="catalog-button"
          onClick={(e) => handlerAddToCart(e, id)}
          disabled={checkedCart()}
        >
          {checkedButton()}
        </Button>
      </div>
    </StyledItemBook>
  );
};

export default ItemBook;
