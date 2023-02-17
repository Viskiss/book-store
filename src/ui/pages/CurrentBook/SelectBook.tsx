import { useAppSelector } from 'src/redux/store';

import AuthBanner from 'src/ui/pages/BookStoreMain/Banners/AuthBanner';

import Book from './Book/Book';
import Comments from './Comments/Comments';
import RecommendBooks from './Recommendations/Recommendations';

import StyledItemBook from './SelectBook.styles';

const SelectBook: React.FC = () => {
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

export default SelectBook;
