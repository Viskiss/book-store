import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { useAppDispatch } from '../../../../../redux/store';
import Button from '../../../../components/Button/Button.styles';
import { getSelectBookThunk } from '../../redux/bookStoreThunks';
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

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const selectBook = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    dispatch(getSelectBookThunk(id));
    navigate(`/book/${id}`);
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
        <Button className="simple-button">$ {props.price} USD</Button>
      </div>
    </StyledItemBook>
  );
};

export default ItemBook;
