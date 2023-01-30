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

const SelectBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector((store) => store.userStore.user);

  const { bookId } = useParams();

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
