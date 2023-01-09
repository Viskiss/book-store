import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/store';
import Auth from './Auth/Auth';
import Styles from './BookStore.styles';
import Invit from './Invit/InviteBaner';

const BookStore: React.FC = () => {
  const [isAuthLayout, setIsAuth] = useState(false);
  const isAuth = useAppSelector((store) => store.userRoot.user?.email);

  useEffect(() => {
    if (isAuth) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <Styles>
      <Invit />
      {/* <Catalog /> */}
      {!isAuthLayout && <Auth />}
    </Styles>
  );
};

export default BookStore;
