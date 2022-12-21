// import { useAppSelector } from '../../redux/store';
import Auth from './Auth';
import Styles from './BookStore.styles';
import Invit from './Invit';

const BookStore: React.FC = () => {
  // const error = useAppSelector((state) => state.bookData.error);
  // const auth = useAppSelector((state) => state.bookData.isAuth);

  // if (auth) {
  //   return (
  //     <Styles>
  //       <LogIn />
  //     </Styles>
  //   );
  // }

  return (
    <Styles>
      <Invit />
      Books
      <Auth />
    </Styles>
  );
};

export default BookStore;
