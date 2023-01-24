import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import SelectBox from '../components/SelectFilterBox';

const SortByGenre: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const genres = useAppSelector((store) => store.bookStore.genres);

  const changeFilterState = (newFilter: string) => {
    setFilter((prevFilter) => {
      if (prevFilter.includes(newFilter)) {
        return prevFilter.filter((searchFilter) => searchFilter !== newFilter);
      }

      return [...prevFilter, newFilter];
    });
  };

  useEffect(() => {
    searchParams.set('genres', filter.join());
    if (!filter.length) {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  }, [dispatch, filter, searchParams, setSearchParams]);

  return (
    <SelectBox title="Genre" filter={filter} items={genres} setState={changeFilterState} />
  );
};

export default SortByGenre;
