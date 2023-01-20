import type { SetStateAction } from 'react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { PropsValue, SingleValue } from 'react-select';
import Select from 'react-select';

import constants from 'utils/constants';

export type SortType = {
  id: number;
  name: string;
};

const FilterSelect: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string>();
  const [isInputValue, setInputValue] = useState<SortType>();

  useEffect(() => {
    searchParams.set('select', filter as string);
    if (!filter) {
      searchParams.delete('select');
    }
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  const handleChangeSort = (e: SingleValue<SortType>) => {
    setFilter(e?.name);
    setInputValue(e as SetStateAction<SortType| undefined>);
  };

  return (
    <Select
    className="select"
    closeMenuOnSelect={false}
    value={isInputValue as PropsValue<SortType>}
    getOptionLabel={(sort: SortType) => sort.name}
    getOptionValue={(sort: SortType) => sort.name}
    options={constants.sort}
    onChange={(e) => handleChangeSort(e)}
  />
  );
};

export default FilterSelect;
