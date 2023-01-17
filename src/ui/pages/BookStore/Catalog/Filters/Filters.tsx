import { useState } from 'react';

import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { useAppDispatch } from '../../../../../redux/store';

import StyledFilters from './Filters.styles';

import Genre from './Gerne/Gerne';
import SortByPrice from './SortBy/SortByPrice';
import SortByName from './SortBy/SortByName';
import SortByAuthorName from './SortBy/SortByAuthorName';

const sortList = ['Price', 'Name', 'Author name', 'Rating', 'Date of issue'];

const Filters: React.FC = () => {
  const [filter, setFilter] = useState('Price');

  const dispatch = useAppDispatch();

  const hangleChangeSort = (e: SelectChangeEvent<string>) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <StyledFilters>
      <div className="filter-books-name">
        <h2 className="title-catalog">Catalog</h2>
      </div>
      <div>
        <Genre />

        {filter === 'Price' && <SortByPrice />}
        {filter === 'Name' && <SortByName />}
        {filter === 'Author name' && <SortByAuthorName />}

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
