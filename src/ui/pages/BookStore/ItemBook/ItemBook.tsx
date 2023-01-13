import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import Button from '../../../components/Button/Button.styles';
import StyledItemBook from './ItemBook.styles ';

interface IProps {
cover: string;
title: string;
author: string;
rate: number;
price: string;
}

const ItemBook: React.FC<IProps> = (props: IProps) => {
  const [rating] = useState(props.rate);

  return (
    <StyledItemBook>
    <div className="cover-book"><img className="cover" src={props.cover} alt="" /></div>
    <div className="book-info"><Link className="book-title" to="/">{props.title}</Link>
    <p className="book-author">{props.author}</p>
    <div className="books-rate">
    <Rating className="rate"
    initialValue={rating}
    />
    </div>
    <Button className="simple-button">$ {props.price} USD</Button>
    </div>
    </StyledItemBook>
  );
};

export default ItemBook;
