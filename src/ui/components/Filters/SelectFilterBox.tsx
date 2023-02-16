import React, { useState, useRef } from 'react';
import ReactSlider from 'react-slider';

import { useOutsideClick } from 'src/hooks/useOutsideClick';

import type { GenreType } from 'src/types/bookStoreTypes';

import arrow from 'src/ui/assets/images/icon/arrowRight.svg';
import polygon from 'src/ui/assets/images/icon/Polygon.svg';

import Item from './ItemSelector';

import StyledSelect from './SelectFilterBox.styles';

type PropsType = {
  typeSelect?: boolean;
  minStartPrice?: number;
  maxStartPrice?: number;
  value?: number[];
  title: string;
  filter?: string[] | string;
  items?: GenreType[] | [];
  onChange?: (value: number[]) => void;
  handlerChange?: (newFilter: string) => void;
  onAfterChange?: (value: number[], index: number) => void;
};

const SelectFilterBox: React.FC<PropsType> = ({
  typeSelect,
  minStartPrice,
  maxStartPrice,
  value,
  title,
  filter,
  items,
  onChange,
  handlerChange,
  onAfterChange,
}) => {
  const [viewItems, setViewItems] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, setViewItems);

  const handleViewItems = () => {
    if (viewItems) {
      setViewItems(false);
    }
    if (!viewItems) {
      setViewItems(true);
    }
  };

  return (
    <StyledSelect view={viewItems} typeSelector={typeSelect} ref={wrapperRef}>
      <div onClick={handleViewItems} className="select-box">
        <img className="select-box__polygon" src={polygon} alt="" />

        <span className="select-box__title">{title}</span>

        <img className="select-box__arrow" src={arrow} alt="" />
      </div>

      <div
        className={
          title !== 'Price' ? 'select-box__items' : 'select-box__items-price'
        }
      >
        {title !== 'Price' ? (
          items && handlerChange &&
          items.map((item) => (
            <Item
              title={title}
              filter={filter}
              handlerChange={handlerChange}
              key={item.id}
              name={item.name}
              id={item.id}
            />
          ))
        ) : (
          <>
            <ReactSlider
              className="select-box__slider"
              value={value}
              min={minStartPrice}
              max={maxStartPrice}
              onChange={onChange}
              onAfterChange={onAfterChange}
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
            />
            <div className="price">
              {value && (
                <>
                  <p>$ {value[0]}</p>
                  <p>$ {value[1]}</p>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </StyledSelect>
  );
};

export default SelectFilterBox;
