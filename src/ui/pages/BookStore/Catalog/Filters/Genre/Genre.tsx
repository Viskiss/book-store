import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { MultiValue, PropsValue } from 'react-select';
import Select from 'react-select';
import type { GenreType } from 'types';

import { useAppDispatch, useAppSelector } from 'redux/store';
import {
  getFilterBooksThunk,
} from '../../../redux/bookStoreThunks';

const Genre: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const genres = useAppSelector((store) => store.bookStore.genres);

  useEffect(() => {
    dispatch(getFilterBooksThunk('filter'));
  }, [dispatch, filter]);

  useEffect(() => {
    searchParams.set('genres', filter.toString());
    if (!filter.length) {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  const handleChangeGenre = (e: MultiValue<GenreType>) => {
    e.forEach((item) => {
      setFilter([...filter, item.name]);
    });
  };

  return (
    <Select
    className="select"
    closeMenuOnSelect={false}
    value={filter as unknown as PropsValue<GenreType> | undefined}
    isMulti
    getOptionLabel={(genre: GenreType) => genre.name}
    getOptionValue={(genre: GenreType) => genre.name}
    options={genres}
    onChange={(e) => handleChangeGenre(e)}
  />
  );
};

export default Genre;
