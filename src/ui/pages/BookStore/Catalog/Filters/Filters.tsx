import { useEffect, useState } from 'react';

import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { useAppDispatch, useAppSelector } from '../../../../../redux/store';

import { getAllGenresThunk } from '../../redux/bookStoreThunks';
import Genre from './Gerne/Genre';
import SortByPrice from './SortByPrice';
import Loading from '../../../../containers/Navigation/components/Loading/Loading';

import StyledFilters from './Filters.styles';

const sortList = ['Price', 'Name', 'Author name', 'Rating', 'Date of issue'];

const Filters: React.FC = () => {
  const [filter, setFilter] = useState('Price');
  const genres = useAppSelector((store) => store.bookStore.genres);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(getAllGenresThunk());
    }
  }, [dispatch, genres.length]);

  if (!genres.length) {
    return <Loading />;
  }

  const hangleChangeSort = (e: SelectChangeEvent<string>) => {
    setFilter(e.target.value);
  };

  return (
    <StyledFilters>
      <div className="filter-books-name">
        <h2 className="title-catalog">Catalog</h2>
      </div>
      <div>

        <Genre />
        <SortByPrice />

        <FormControl className="select">
          <InputLabel className="select-input">Sort by {filter}</InputLabel>
          <Select
            className="select-input-box"
            value={filter}
            label="Sort"
            onChange={hangleChangeSort}
          >
            {sortList.map((sort) => (
              <MenuItem className="select-item" value={sort} key={sort}>
                {sort}
              </MenuItem>
            ))}
            <MenuItem className="select-item" value="All">
              All
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </StyledFilters>
  );
};

export default Filters;
