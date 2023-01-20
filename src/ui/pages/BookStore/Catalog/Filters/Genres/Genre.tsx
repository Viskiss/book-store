import type { SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { MultiValue, PropsValue } from 'react-select';
import Select from 'react-select';
import type { GenreType } from 'types';

import { useAppDispatch, useAppSelector } from 'redux/store';

import StyledGenresSelect from './Genre.styles';

const Genre: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string[]>([]);
  const [isInputValue, setInputValue] = useState<GenreType[]>([]);

  const dispatch = useAppDispatch();
  const genres = useAppSelector((store) => store.bookStore.genres);

  useEffect(() => {
    searchParams.set('genres', filter.join());
    if (!isInputValue.length) {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  }, [dispatch, filter, isInputValue.length, searchParams, setSearchParams]);

  const handleChangeGenre = (e: MultiValue<GenreType>) => {
    e.forEach((item) => {
      setFilter([...filter, item.name]);
    });
    setInputValue(e as SetStateAction<GenreType[]>);
  };

  return (
    <StyledGenresSelect>
      <Select
        className="select"
        closeMenuOnSelect={false}
        value={isInputValue as PropsValue<GenreType> | undefined}
        isMulti
        getOptionLabel={(genre: GenreType) => genre.name}
        getOptionValue={(genre: GenreType) => genre.name}
        options={genres}
        onChange={(e) => handleChangeGenre(e)}
      />
    </StyledGenresSelect>
  );
};

export default Genre;
