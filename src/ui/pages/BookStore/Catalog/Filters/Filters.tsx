import { useEffect } from 'react';
import Lottie from 'lottie-react';

import loader from 'src/ui/assets/lottieFiles/loading.json';

import options from 'src/utils/lottieOptions';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { useSearchParams } from 'react-router-dom';
import { getAllGenresThunk, getFilterBooksThunk } from '../../redux/thunks/bookStoreThunks';

import Genre from './Sorting/SortByGenre';

import StyledFilters from './Filters.styles';
import FilterSelect from './Sorting/FilterSelect';
import SortByPrice from './Sorting/SortByPrice';

const Filters: React.FC = () => {
  const [searchParams] = useSearchParams();
  const genres = useAppSelector((store) => store.bookStore.genres);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(getAllGenresThunk());
    }
  }, [dispatch, genres.length]);

  useEffect(() => {
    const genre = searchParams.get('genres') || '';
    const select = searchParams.get('select') || 'Name';
    const search = searchParams.get('search') || '';
    const page = (Number(searchParams.get('page') || 1));
    const minPrice = Number(searchParams.get('minPrice') || '7.39');
    const maxPrice = Number(searchParams.get('maxPrice') || '70.99');
    dispatch(getFilterBooksThunk({ genre, select, search, page, maxPrice, minPrice }));
  }, [dispatch, searchParams]);

  if (!genres.length) {
    return <Lottie style={options.loadingStyles} animationData={loader} />;
  }

  return (
    <StyledFilters>
      <div>
        <h2 className="filters--title">Catalog</h2>
      </div>
      <div className="filters--book-filter">
        <Genre />
        <SortByPrice />
        <FilterSelect />
      </div>
    </StyledFilters>
  );
};

export default Filters;
