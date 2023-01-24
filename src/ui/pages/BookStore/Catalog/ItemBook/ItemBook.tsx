import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

import Button from 'src/ui/components/Button';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { getSelectBookThunk } from '../../redux/thunks/bookStoreThunks';

import StyledItemBook from './ItemBook.styles ';
import { AddBookThunk } from '../../redux/thunks/cartThunks';

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
  const [addedToCart, setAddedToCart] = useState('simple-button');
  const user = useAppSelector((store) => store.userStore.user);

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
    setAddedToCart('cart-button');
    dispatch(AddBookThunk({ userId: user?.id || 0, bookId }));
  };

  return (
    <StyledItemBook>
      <div className="cover-book">
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
          onClick={(e) => handlerAddToCart(e, props.id)}
          className={addedToCart}
        >
          {addedToCart === 'simple-button' ? `${props.price} USD` : 'Added to cart'}

        </Button>
      </div>
    </StyledItemBook>
  );
};

export default ItemBook;
