import { useEffect } from 'react';
import Lottie from 'lottie-react';

import options from 'src/utils/lottieOptions';
import loader from 'src/ui/assets/lottieFiles/loading.json';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import Pagination from 'src/ui/components/Pagintion';
import Filters from 'src/ui/components/Filters';
import ItemBook from './ItemBook/ItemBook';

import StyledCatalog from './Catalog.styles';
import { getLikedBooksThunk } from '../redux/thunks/likedBooksThunks';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const books = useAppSelector((store) => store.bookStore.books);
  const likedBooks = useAppSelector((store) => store.bookStore.likedBooks);
  const user = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    if (!likedBooks.length && user) {
      dispatch(getLikedBooksThunk());
    }
  }, [dispatch, likedBooks.length, user]);

  return (
    <StyledCatalog>
      <Filters />
      <div className="books-catalog">
        {!books ? (
          <Lottie style={options.loadingStyles} animationData={loader} />
        ) : (
          <div className="books-catalog__items">
            {books.map((el) => (
              <ItemBook
                price={el.price}
                date={el.date}
                cover={el.cover}
                author={el.author}
                rate={el.rate}
                title={el.title}
                key={el.id}
                id={el.id}
              />
            ))}
          </div>
        )}
      </div>
      <Pagination />
    </StyledCatalog>
  );
};

export default Catalog;
