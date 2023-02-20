import { useAppSelector } from 'src/redux/store';

import AuthBanner from 'src/ui/pages/BookStoreMain/components/AuthBanner/AuthBanner';

import Book from './components/Book/Book';
import Comments from './components/Comments/Comments';
import RecommendBooks from './components/Recommendations/Recommendations';

import StyledItemBook from './CurrentBook.styles';

const CurrentBook: React.FC = () => {
  const user = useAppSelector((store) => store.userStore.user);

  return (
    <StyledItemBook>
      <Book />
      <Comments />
      {!user && <AuthBanner />}
      <RecommendBooks />
    </StyledItemBook>
  );
};

export default CurrentBook;
