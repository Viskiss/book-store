import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';

import type { GenreType } from 'src/types/bookStoreTypes';

import FilterBox from 'src/ui/components/Filter/SelectFilterBox';
import ItemFilter from './ItemFilter';

import StyledFilters from './Filters.styles';

type PropsType = {
  genres: GenreType[];
};

export const sort = [
  { id: 1, name: 'Price' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Author name' },
  { id: 4, name: 'Rating' },
  { id: 5, name: 'Date of issue' },
];

const Filters: React.FC<PropsType> = ({ genres }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const minStartPrice = 0;
  const maxStartPrice = 100;

  const [filterSorting, setFilterSorting] = useState<string>('Price');
  const [filterGenres, setFilterGenres] = useState<string[]>([]);

  const [valuePrice, setValuePrice] = useState(() => {
    const minValue = Number(searchParams.get('minPrice') || minStartPrice);
    const maxValue = Number(searchParams.get('maxPrice') || maxStartPrice);
    return [minValue, maxValue];
  });

  useEffect(() => {
    const genre = searchParams.get('genres');
    if (genre) {
      const filter = genre?.split(',');
      setFilterGenres(filter);
    }
  }, [searchParams]);

  useEffect(() => {
    searchParams.set('genres', filterGenres.join());
    if (!filterGenres.length) {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterGenres, setSearchParams]);

  useEffect(() => {
    searchParams.set('select', filterSorting as string);
    if (!filterSorting) {
      searchParams.delete('select');
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSorting, setSearchParams]);

  const handlerChangeFilterGenre = (newFilter: string) => {
    setFilterGenres((prevFilter) => {
      if (prevFilter.includes(newFilter)) {
        return prevFilter.filter((searchFilter) => searchFilter !== newFilter);
      }

      return [...prevFilter, newFilter];
    });
  };

  const handlerSelectionPrice = (value: number[]) => {
    searchParams.set('minPrice', value[0].toString());
    searchParams.set('maxPrice', value[1].toString());
    if (value[0] === minStartPrice && value[1] === maxStartPrice) {
      searchParams.delete('minPrice');
      searchParams.delete('maxPrice');
    }
    setSearchParams(searchParams);
  };

  const handlerChangeSort = (name: string) => {
    setFilterSorting(name);
  };

  const handlerChangePrice = (value: number[]) => {
    setValuePrice(value);
  };

  return (
    <StyledFilters>
      <h2 className="filters__title">Catalog</h2>
      <div className="filters__book-filter">
        <FilterBox title="Genre">
          {genres.map((item) => (
            <ItemFilter
              filter={filterGenres}
              handlerChange={handlerChangeFilterGenre}
              name={item.name}
              key={item.id}
            />
          ))}
        </FilterBox>
        <FilterBox title="Price">
          <ReactSlider
            className="select-box__slider"
            value={valuePrice}
            min={minStartPrice}
            max={maxStartPrice}
            onChange={handlerChangePrice}
            onAfterChange={handlerSelectionPrice}
            thumbClassName="example-thumb"
            trackClassName="example-track"
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
          <div className="price">
            {valuePrice && (
              <>
                <p>$ {valuePrice[0]}</p>
                <p>$ {valuePrice[1]}</p>
              </>
            )}
          </div>
        </FilterBox>
        <FilterBox title={`Sort by ${filterSorting.toLowerCase()}`}>
          {sort.map((item) => (
            <ItemFilter
              filter={item.name}
              handlerChange={handlerChangeSort}
              name={item.name}
              key={item.id}
            />
          ))}
        </FilterBox>
      </div>
    </StyledFilters>
  );
};

export default Filters;
