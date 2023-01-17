import { useEffect, useState } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { useAppDispatch, useAppSelector } from '../../../../../../redux/store';
import {
  getAllGenresThunk,
  getFilterBooksThunk,
} from '../../../redux/bookStoreThunks';
import { booksSliceActions } from '../../../redux/bookStoreSlice';

import uncheck from '../images/Unchecked.svg';
import check from '../images/Checked.svg';

const Genre: React.FC = () => {
  const filterBooks = useAppSelector((store) => store.bookStore.filter);
  const [filter, setFilter] = useState(filterBooks);
  const [butonImg, setButtonImg] = useState(uncheck);

  const dispatch = useAppDispatch();
  const genres = useAppSelector((store) => store.bookStore.genres);

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(getAllGenresThunk());
    }
    dispatch(getFilterBooksThunk(filter));
  }, [dispatch, filter, genres.length]);

  const handleChangeGenre = (event: SelectChangeEvent) => {
    // useseartchparams
    dispatch(getFilterBooksThunk(event.target.value));
    dispatch(booksSliceActions.filterBooks(event.target.value));
    setFilter(event.target.value);
    setButtonImg(check);
  };

  return (
    <FormControl className="select">
      <InputLabel className="select-input">Gerne</InputLabel>
      <Select
        className="select-input-box"
        value={filter}
        label="Gerne"
        onChange={handleChangeGenre}
      >
        {genres.map((genre) => (
          <MenuItem className="select-item" value={genre.name} key={genre.id}>
            <span
                  className="button-check"
                  onClick={() => setButtonImg(check)}
                >
                  <img src={butonImg} alt="" />
            </span>
            {genre.name}
          </MenuItem>
        ))}
        <MenuItem className="select-item" value="All">
          All
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Genre;
