import { useAppSelector } from 'src/redux/store';

import AuthBanner from 'src/ui/pages/BookStore/Banners/AuthBanner';

import Book from './Book/Book';
import Comments from './Comments/Comments';
import RecommendBooks from './Recommendations/Recommendations';

import StyledItemBook from './SelectBook.styles';

const SelectBook: React.FC = () => {
  const isAuth = useAppSelector((store) => store.userStore.user);

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
