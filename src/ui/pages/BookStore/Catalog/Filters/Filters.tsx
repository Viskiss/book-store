import { useEffect } from 'react';
import Lottie from 'lottie-react';

import loader from 'ui/assets/lottieFiles/9329-loading.json';

import options from 'utils/lottieOptions';

import { useAppDispatch, useAppSelector } from 'redux/store';
import { useSearchParams } from 'react-router-dom';
import { getAllGenresThunk, getFilterBooksThunk } from '../../redux/bookStoreThunks';

import Genre from './Genres/Genre';

import StyledFilters from './Filters.styles';
import FilterSelect from './FilterSelect/FilterSelect';

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
    const genre = searchParams.get('genres') || 'All';
    const select = searchParams.get('select');
    dispatch(getFilterBooksThunk({ genre, select }));
  }, [dispatch, searchParams]);

  if (!genres.length) {
    return <Lottie style={options.loadingStyles} animationData={loader} />;
  }

  return (
    <StyledFilters>
      <div className="">
        <h2 className="title-catalog">Catalog</h2>
      </div>
      <div className="filter-books">
        <Genre />
        {/* <SortByPrice /> */}
        <FilterSelect />
      </div>
    </StyledFilters>
  );
};

export default Filters;
