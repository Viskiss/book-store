import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';

import { useOutsideDrop } from 'src/hooks';

import SelectDropBox from './components/SelectDropBox';

import StyledSortByPrice from './components/SortByPrice.styles';

const SortByPrice: React.FC = () => {
  const minStartPrice = 0;
  const maxStartPrice = 1000;

  const [searchParams, setSearchParams] = useSearchParams();

  const [dropSelect, setDropSelect] = useState(false);
  const [value, setValue] = useState(() => {
    const minValue = Number(searchParams.get('minPrice') || minStartPrice);
    const maxValue = Number(searchParams.get('maxPrice') || maxStartPrice);
    return [minValue, maxValue];
  });

  const selectionPriceHandler = (value: number[]) => {
    searchParams.set('minPrice', value[0].toString());
    searchParams.set('maxPrice', value[1].toString());
    if (value[0] === minStartPrice && value[1] === maxStartPrice) {
      searchParams.delete('minPrice');
      searchParams.delete('maxPrice');
    }
    setSearchParams(searchParams);
  };

  const wrapperRef = useRef(null);
  useOutsideDrop(wrapperRef, setDropSelect);

  const changeHandler = (value: number[]) => {
    setValue(value);
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
    <StyledSortByPrice ref={wrapperRef} drop={dropSelect}>
      <SelectDropBox handler={handleDropSelect} title="Price" />
      <div className="select-box__items">
        <ReactSlider
          className="select-box__slider"
          value={value}
          min={minStartPrice}
          max={maxStartPrice}
          onChange={changeHandler}
          onAfterChange={selectionPriceHandler}
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
        <div className="price">
          <p>$ {value[0]}</p>
          <p>$ {value[1]}</p>
        </div>
      </div>
    </StyledSortByPrice>
  );
};

export default SortByPrice;
