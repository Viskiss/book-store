import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'redux/store';

import arrow from 'ui/assets/images/arrowRight.svg';

import StyledSelect from './Genre.styles';
import ItemGenre from './ItemGenre';

const Genre: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dropSelect, setDropSelect] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const genres = useAppSelector((store) => store.bookStore.genres);

  const changeFilterState = (newFilter: string) => {
    // const index = filter.indexOf(newFilter);
    // if (index !== -1) {
    //   const arr = filter.splice(index, 1);
    //   setFilter(arr);
    // }

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
  }, [dispatch, filter, searchParams, setSearchParams]);

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
          value="Genre"
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
        {genres.map((item) => (
          <ItemGenre
            key={item.id}
            filter={filter}
            setFilter={changeFilterState}
            name={item.name}
            id={item.id}
          />
        ))}
      </div>
    </StyledSelect>
  );
};

export default Genre;
