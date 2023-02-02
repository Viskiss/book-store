import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { useEffect } from 'react';

import TextBlock from 'src/ui/components/TextBlock';

import booksImg from 'src/ui/assets/images/books.svg';

import ItemLike from './ItemLike';

import { getLikedBooksThunk } from '../redux/thunks/likedBooksThunks';

import StyledLikedBooks from './LikedBooks.styles';

const LikedBooks: React.FC = () => {
  const dispatch = useAppDispatch();

  const likesBooks = useAppSelector((store) => store.bookStore.likedBooks);
  const isAuth = useAppSelector((store) => store.userStore.isAuthenticated);

  useEffect(() => {
    if (!likesBooks.length && isAuth) {
      dispatch(getLikedBooksThunk());
    }
  }, [dispatch, isAuth, likesBooks.length]);

  return (
    <StyledLikedBooks>
      {likesBooks.length ? (
        <div className="liked__books">
            {likesBooks.map((item) => (
              <ItemLike
                author={item.book.author}
                title={item.book.title}
                bookId={item.book.id}
                cover={item.book.cover}
                key={item.id}
              />
            ))}
        </div>
      ) : (
        <div className="like-container">
          <img className="like-container__img" src={booksImg} alt="" />
          <TextBlock
            h1="Your liked is empty"
            className="simple-button"
            link="/"
            title="Go to catalog"
            p="Add items to liked to make a purchase.Go to the catalogue no."
            key={0}
          />
        </div>
      )}
    </StyledLikedBooks>
  );
};

export default LikedBooks;
