// import { useAppSelector } from '../../redux/store';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/store';
import Auth from './Auth';
import Styles from './BookStore.styles';
import Invit from './Invit';

const BookStore: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const auth = useAppSelector((store) => store.bookData.user.email);
  useEffect(() => {
    if (auth) {
      setIsAuth(true);
    }
  }, [auth]);

  return (
    <Styles>
      <Invit />
      Books
      {!isAuth
        ? (<Auth />) : (<>Auth true</>)}
    </Styles>
  );
};

export default BookStore;
