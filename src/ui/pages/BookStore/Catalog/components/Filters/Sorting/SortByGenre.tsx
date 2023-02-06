import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from 'src/redux/store';
import type { GenreType } from 'src/types';

import SelectBox from '../components/SelectFilterBox';

interface IProps {
  genres: GenreType[];
}

const SortByGenre: React.FC<IProps> = ({ genres }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filter, setFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const genre = searchParams.get('genres');
    if (genre) {
      const filter = genre?.split(',');
      setFilter(filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filter, setSearchParams]);

  return (
    <SelectBox
      title="Genre"
      filter={filter}
      items={genres}
      setState={changeFilterState}
    />
  );
};

export default SortByGenre;
