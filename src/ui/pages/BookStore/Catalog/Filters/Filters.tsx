import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import type { PropsValue, SingleValue } from 'react-select';
import Select from 'react-select';

import loader from 'ui/assets/lottieFiles/9329-loading.json';

import options from 'utils/lottieOptions';
import constants from 'utils/constants';

import { useAppDispatch, useAppSelector } from 'redux/store';
import { getAllGenresThunk } from '../../redux/bookStoreThunks';

import Genre from './Genre';
import SortByPrice from './SortByPrice';

import StyledFilters from './Filters.styles';

type SortType = {
  id: number;
  name: string;
};

const Filters: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const genres = useAppSelector((store) => store.bookStore.genres);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(getAllGenresThunk());
    }
  }, [dispatch, genres.length]);

  if (!genres.length) {
    return <Lottie style={options.loadingStyles} animationData={loader} />;
  }

  const handleChangeSort = (e: SingleValue<SortType>) => {
    setFilter(e as unknown as SetStateAction<string>);
  };

  return (
    <StyledFilters>
      <div className="filter-books-name">
        <h2 className="title-catalog">Catalog</h2>
      </div>
      <div>

        <Genre />
        <SortByPrice />

        <Select
    className="select"
    closeMenuOnSelect={false}
    value={filter as unknown as PropsValue<SortType> | undefined}
    getOptionLabel={(sort: SortType) => sort.name}
    getOptionValue={(sort: SortType) => sort.name}
    options={constants.sort}
    onChange={(e) => handleChangeSort(e)}
  />
      </div>
    </StyledFilters>
  );
};

export default Filters;
