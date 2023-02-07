import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import AuthBanner from 'src/ui/pages/BookStore/Banners/AuthBanner';
import { getSelectBookThunk } from 'src/ui/pages/BookStore/redux/thunks';

import Book from './Book/Book';
import Comments from './Comments/Comments';
import RecommendBooks from './Recommendations/Recommendations';

import StyledItemBook from './SelectBook.styles';

const SelectBook: React.FC = () => {
  const { bookId } = useParams();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isAuth = useAppSelector((store) => store.userStore.user);
  const book = useAppSelector((store) => store.bookStore.book);

  useEffect(() => {
    dispatch(getSelectBookThunk(Number(bookId)));
  }, [bookId, dispatch]);

  return (
    <StyledItemBook>
      <Book />
      <Comments />
      {!isAuth && <AuthBanner />}
      <RecommendBooks />
    </StyledItemBook>
  );
};

export default SelectBook;
