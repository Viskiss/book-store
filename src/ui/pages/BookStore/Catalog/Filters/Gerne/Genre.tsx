import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { useAppDispatch, useAppSelector } from '../../../../../../redux/store';
import {
  // getAllGenresThunk,
  getFilterBooksThunk,
} from '../../../redux/bookStoreThunks';

const Genre: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const genres = useAppSelector((store) => store.bookStore.genres);

  useEffect(() => {
    dispatch(getFilterBooksThunk(filter));
  }, [dispatch, filter]);

  useEffect(() => {
    searchParams.set('genres', filter.join());
    if (!filter.length) {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  const handleChangeGenre = (event: SelectChangeEvent) => {
    event.preventDefault();

    const {
      target: { value },
    } = event;
    setFilter(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl className="select">
      <InputLabel className="select-input">Gerne</InputLabel>
      <Select
        className="select-input-box"
        multiple
        value={ filter as unknown as string }
        label="Gerne"
        onChange={handleChangeGenre}
      >
        {genres.map((genre) => (
          <MenuItem className="select-item" value={genre.name} key={genre.id}>
            {/* <span
                  className="button-check"
                  onClick={() => setButtonImg(check)}
                >
                  <img src={butonImg} alt="" />
            </span> */}
            {genre.name}
          </MenuItem>
        ))}
        {/* <MenuItem className="select-item" value="''">
          All
        </MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default Genre;
