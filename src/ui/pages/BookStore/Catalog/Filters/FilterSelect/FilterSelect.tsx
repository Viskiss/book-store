import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import constants from 'utils/constants';

import arrow from 'ui/assets/images/arrowRight.svg';

import StyledSelect from './FilterSelect.styles';

const FilterSelect: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dropSelect, setDropSelect] = useState(false);
  const [filter, setFilter] = useState<string>('Price');

  useEffect(() => {
    searchParams.set('select', filter as string);
    if (!filter) {
      searchParams.delete('select');
    }
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  const handleChangeSort = (name: string) => {
    setFilter(name);
  };

  const handleDropSelect = () => {
    if (dropSelect) {
      setDropSelect(false);
    }
    if (!dropSelect) {
      setDropSelect(true);
    }
  };

  return (
    <StyledSelect drop={dropSelect}>
      <div className="select-box">
        <input
          value={`Sort by ${filter}`}
          className="select-box--input"
          type="text"
          disabled
        />
        <button
          onClick={() => handleDropSelect()}
          className="select-box--button"
        >
          <img className="select-box--arrow" src={arrow} alt="" />
        </button>
      </div>
      <div className="select-box--items">
        {constants.sort.map((item) => (
          <div
            onClick={() => handleChangeSort(item.name)}
            className="select-box--item"
            key={item.id}
          >
            <p className="select-box--text">{item.name}</p>
          </div>
        ))}
      </div>
    </StyledSelect>
  );
};

export default FilterSelect;
