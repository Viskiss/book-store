import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from 'src/ui/components/Button';

import like from 'src/ui/assets/images/icon/Heart.svg';
import fillLike from 'src/ui/assets/images/icon/fillHeart.svg';

import { addFavoriteBook } from 'src/api';
import constants from 'src/utils/constants';
import tokenHelper from 'src/utils/tokenHelper';

import type { BookType, FavoriteBookType } from 'src/types';
import { useAppSelector } from 'src/redux/store';

import star from 'src/ui/assets/images/icon/Star.svg';
import emptyStar from 'src/ui/assets/images/icon/EmptyStar.svg';

import StyledItemBook from './ItemBook.styles ';

interface IProps {
  books: BookType;
  favoriteBooks: FavoriteBookType[];
  setDeleteBook: (bookId: number) => void;
  setAddToCartBook: (bookId: number) => void;
  setFavoriteBooks: Dispatch<SetStateAction<FavoriteBookType[]>>;
}

const ItemBook: React.FC<IProps> = ({
  books: { cover, title, author, date, rate, price, id },
  favoriteBooks,
  setDeleteBook,
  setAddToCartBook,
  setFavoriteBooks,
}) => {
  const navigate = useNavigate();

  const [likedBook, setLikedBook] = useState(false);

  const newDay = new Date('2023-01-01');

  const cart = useAppSelector((store) => store.bookStore.cart);
  const user = useAppSelector((store) => store.userStore.user);

  const selectBookInCart = cart.find((book) => book.bookId === id);
  const selectBookFavorite = favoriteBooks.find((book) => book.book.id === id);

  const handlerLikeBook = () => {
    if (!user) {
      navigate(constants.routesLink.signIn);
    } else {
      (async () => {
        try {
          const books = await addFavoriteBook(id);
          setFavoriteBooks(books.data.books);
          setLikedBook(true);
        } catch (err) {
          const error = err as Error;
          toast.error(error.message);
        }
      })();
    }

    if (likedBook && selectBookFavorite) {
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

  return (
    <StyledItemBook bestrate={rate > 4} likedBook={!!selectBookFavorite}>
      <div className="cover-book">
        <Button onClick={handlerLikeBook} className="cover-book__like">
          <img
            className="cover-book__like-img"
            src={selectBookFavorite && tokenHelper.token.get() ? fillLike : like}
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
          <span className="rate-number">
            {rate?.toString().length > 2 ? `${rate}` : `${rate}.0`}
          </span>
        </div>
        <div className="catalog-button__box">
          <Button
            className="catalog-button"
            onClick={() => setAddToCartBook(id)}
            disabled={!!(!id || selectBookInCart)}
          >
            {selectBookInCart ? 'Added to cart' : `$ ${price} USD`}
          </Button>
        </div>
      </div>
    </StyledItemBook>
  );
};

export default ItemBook;
