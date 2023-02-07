import Lottie from 'lottie-react';

import options from 'src/utils/lottieOptions';
import loader from 'src/ui/assets/lottieFiles/loading.json';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import Filters from 'src/ui/pages/BookStore/Catalog/components/Filters';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemBook from './components/ItemBook';

import Pagination from './components/Pagintion/Pagination';

import StyledCatalog from './Catalog.styles';
import { getFilterBooksThunk } from '../redux/thunks';

const Catalog: React.FC = () => {
  const books = useAppSelector((store) => store.bookStore.books);

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const genre = searchParams.get('genres') || '';
    const select = searchParams.get('select') || 'Price';
    const search = searchParams.get('search') || '';
    const page = Number(searchParams.get('page') || 1);
    const minPrice = Number(searchParams.get('minPrice') || '7.39');
    const maxPrice = Number(searchParams.get('maxPrice') || '70.99');
    dispatch(
      getFilterBooksThunk({ genre, select, search, page, maxPrice, minPrice }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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
