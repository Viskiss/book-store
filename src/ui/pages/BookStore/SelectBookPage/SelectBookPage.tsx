import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import constants from 'src/utils/constants';
import { getRecommendedBooksThunk, getSelectBookThunk } from '../redux/thunks/bookStoreThunks';

import Book from './Book/Book';
import Comments from './Comments/Comments';
import AuthBanner from '../Banners/AuthBanner/AuthBanner';
import RecommendBooks from './Recommendations/RecommendBooks';

import StyledItemBookPage from './SelectBookPage.styles';
import { getRateThunk } from '../redux/thunks/rateBooksThunks';

const SelectBook: React.FC = () => {
  const { bookId } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector((store) => store.userStore.user);

  const book = useAppSelector((store) => store.bookStore.book);
  const user = useAppSelector((store) => store.userStore.user);
  const rate = useAppSelector((store) => store.bookStore.rate);

  useEffect(() => {
    if (!rate && user && book.id) {
      dispatch(getRateThunk({ bookId: Number(bookId), userId: user.id }));
    }
  }, [book.id, bookId, dispatch, rate, user]);

  useEffect(() => {
    dispatch(getRecommendedBooksThunk(isAuth?.id || 1));
    dispatch(getSelectBookThunk(Number(bookId)))
      .unwrap()
      .catch(
        (error: {
        message: string;
      }) => {
          if (error.message) {
            navigate(`${constants.routesLink.home}`);
            toast.error(error.message);
          }
        },
      );
  }, [bookId, dispatch, isAuth?.id, navigate]);

  return (
    <StyledItemBookPage>
      <Book />
      <Comments />
      {!isAuth && <AuthBanner />}
      <RecommendBooks />
    </StyledItemBookPage>
  );
};

export default SelectBook;
