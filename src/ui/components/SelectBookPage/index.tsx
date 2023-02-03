import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import AuthBanner from 'src/ui/pages/BookStore/Banners/AuthBanner/AuthBanner';
import { getSelectBookThunk } from 'src/ui/pages/BookStore/redux/thunks/bookStoreThunks';

import Book from './Book/Book';
import Comments from './Comments/Comments';
import RecommendBooks from './Recommendations/RecommendBooks';

import StyledItemBookPage from './SelectBookPage.styles';

const SelectBook: React.FC = () => {
  const { bookId } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    dispatch(getSelectBookThunk(Number(bookId)));
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
