import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/store';
import Auth from './Auth';
import Styles from './BookStore.styles';
import Invit from './Invit';

const BookStore: React.FC = () => {
  const [isAuthLayout, setIsAuth] = useState(false);
  const isAuth = useAppSelector((store) => store.bookData.user.email);

  useEffect(() => {
    if (isAuth) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <Styles>
      <Invit />
      Books
      {!isAuthLayout && <Auth />}
    </Styles>
  );
};

export default BookStore;
