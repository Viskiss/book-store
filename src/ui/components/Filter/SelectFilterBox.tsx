import React, { useState, useRef } from 'react';

import { useOutsideClick } from 'src/hooks/useOutsideClick';

import arrow from 'src/ui/assets/images/icon/arrowRight.svg';
import polygon from 'src/ui/assets/images/icon/Polygon.svg';

import StyledSelect from './SelectFilterBox.styles';

type PropsType = {
  children: React.ReactNode;
  title: string;
};

const FilterBox: React.FC<PropsType> = ({ children, title }) => {
  const [viewItems, setViewItems] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(wrapperRef, setViewItems);

  const handlerViewItems = () => {
    if (viewItems) {
      setViewItems(false);
    }
    if (!viewItems) {
      setViewItems(true);
    }
  };

  return (
    <StyledSelect
      view={viewItems}
      typeSelector={title !== 'Genre'}
      ref={wrapperRef}
    >
      <div onClick={handlerViewItems} className="select-box">
        <img className="select-box__polygon" src={polygon} alt="" />

        <span className="select-box__title">{title}</span>

        <img className="select-box__arrow" src={arrow} alt="" />
      </div>

      <div
        className={
          title !== 'Price' ? 'select-box__items' : 'select-box__items-price'
        }
      >
        {children}
      </div>
    </StyledSelect>
  );
};

export default FilterBox;
