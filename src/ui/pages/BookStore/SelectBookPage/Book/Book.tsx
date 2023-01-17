import { useAppSelector } from '../../../../../redux/store';

import Button from '../../../../components/Button/Button.styles';

import StyledBook from './Book.styles';
import StarRate from './StarRate/StarRate';

const Book: React.FC = () => {
  const book = useAppSelector((store) => store.bookStore.book);

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
          <p>Rate this book</p>
        </div>
        <p className="description">Description</p>
        <p className="text">{book.text}</p>
        <div className="buttons-box">
          <div>
            <p>Paperback</p>
            {book.status === 'Paperback' ? (
              <Button className="simple-button">$ {book.price} USD</Button>
            ) : (
              <Button disabled className="disabled-button">Not available</Button>
            )}
          </div>
          <div>
            <p>Hardcover</p>
            {book.status === 'Hardcover' ? (
              <Button className="simple-button">$ {book.price} USD</Button>
            ) : (
              <Button disabled className="disabled-button">Not available</Button>
            )}
          </div>
        </div>
      </div>
    </StyledBook>
  );
};

export default Book;
