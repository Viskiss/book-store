import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';

import StyledSortByPrice from './SortByPrice.styles';

const SortByPrice: React.FC = () => {
  const minStartPrice = 7.39;
  const maxStartPrice = 70.99;
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState([minStartPrice, maxStartPrice]);

  useEffect(() => {
    const minValue = Number(searchParams.get('minPrice') || minStartPrice);
    const maxValue = Number(searchParams.get('maxPrice') || maxStartPrice);
    setValue([minValue, maxValue]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectionPriceHandler = (value: number[]) => {
    searchParams.set('minPrice', value[0].toString());
    searchParams.set('maxPrice', value[1].toString());
    if (value[0] === minStartPrice && value[1] === maxStartPrice) {
      searchParams.delete('minPrice');
      searchParams.delete('maxPrice');
    }
    setSearchParams(searchParams);
  };

  const changeHandler = (value: number[]) => {
    setValue(value);
  };

  return (
    <StyledSortByPrice>
      <ReactSlider
          value={value}
          min={minStartPrice}
          max={maxStartPrice}
          onChange={(value) => changeHandler(value)}
          onAfterChange={(value) => selectionPriceHandler(value)}
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <div className="prise-info">
        <p>$ {value[0]}</p>
        <p>$ {value[1]}</p>
      </div>
    </StyledSortByPrice>
  );
};

export default SortByPrice;
