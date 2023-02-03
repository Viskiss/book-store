import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import loader from 'src/ui/assets/lottieFiles/loading.json';

import options from 'src/utils/lottieOptions';

import { useAppDispatch } from 'src/redux/store';
import {
  getFilterBooksThunk,
} from 'src/ui/pages/BookStore/redux/thunks/bookStoreThunks';

import bookApi from 'src/ui/pages/BookStore/redux/api/bookApi';
import type { GenreType } from 'src/types';
import Genre from './Sorting/SortByGenre';

import StyledFilters from './Filters.styles';
import FilterSelect from './Sorting/FilterSelect';
import SortByPrice from './Sorting/SortByPrice';

const Filters: React.FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const genres = await bookApi.getAllGernes();
        setGenres(genres.data.genres);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    const genre = searchParams.get('genres') || '';
    const select = searchParams.get('select') || 'Name';
    const search = searchParams.get('search') || '';
    const page = Number(searchParams.get('page') || 1);
    const minPrice = Number(searchParams.get('minPrice') || '7.39');
    const maxPrice = Number(searchParams.get('maxPrice') || '70.99');
    dispatch(
      getFilterBooksThunk({ genre, select, search, page, maxPrice, minPrice }),
    );
  }, [dispatch, searchParams]);

  if (!genres.length) {
    return <Lottie style={options.loadingStyles} animationData={loader} />;
  }

  return (
    <StyledFilters>
      <h2 className="filters__title">Catalog</h2>
      <div className="filters__book-filter">
        <Genre genres={genres} />
        <SortByPrice />
        <FilterSelect />
      </div>
    </StyledFilters>
  );
};

export default Filters;
