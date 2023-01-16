import { useAppSelector } from '../../../../../redux/store';
import Button from '../../../../components/Button/Button.styles';
import StyledBook from './Book.styles';

// interface IProps {
//   cover: string;
//   title: string;
//   author: string;
//   rate: number;
//   price: string;
//   text: string;
//   }

const Book: React.FC = () => {
  const book = useAppSelector((store) => store.bookStore.book);
  return (
    <StyledBook>
      <div><img src={book.cover} alt="" /></div>
      <div><h2>{book.title}</h2>
      <p>{book.author}</p>
      <div>RATE{book.rate}</div>
      <p>Description</p>
      <p>{book.text}</p>
      <div><Button className="simple-button">$ {book.price} USD</Button></div>
      </div>
u
    </StyledBook>
  );
};

export default Book;
