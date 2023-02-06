import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import constants from 'src/utils/constants';

import SelectFilterBox from '../components/SelectFilterBox';

const FilterSelect: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string>('Price');

  useEffect(() => {
    searchParams.set('select', filter as string);
    if (!filter) {
      searchParams.delete('select');
    }
    setSearchParams(searchParams);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, setSearchParams]);

  const handleChangeSort = (name: string) => {
    setFilter(name);
  };

  return (
      <SelectFilterBox
        typeSelect
        setState={handleChangeSort}
        filter={filter}
        items={constants.sort}
        title={`Sort by ${filter}`}
      />
  );
};

export default FilterSelect;
