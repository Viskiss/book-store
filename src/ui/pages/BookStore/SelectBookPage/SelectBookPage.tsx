import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { getSelectBookThunk } from '../redux/bookStoreThunks';

import Book from './Book/Book';
import Comments from './Comments/Comments';
import AuthBanner from '../Banners/AuthBanner/AuthBanner';
import RecommendBooks from './Recommendations/RecommendBooks';
import StyledItemBookPage from './SelectBookPage.styles';

const SelectBook: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector((store) => store.userRoot.user);

  const { bookId } = useParams();

  useEffect(() => {
    dispatch(getSelectBookThunk(Number(bookId)))
      .unwrap()
      .catch(
        (error: {
          message: string;
        }) => {
          if (error.message) {
            navigate('/');
            toast.error(error.message);
          }
        },
      );
  }, [bookId, dispatch, navigate]);

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
