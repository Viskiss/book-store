import React, { useState, useRef } from 'react';

import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { useAppSelector } from 'src/redux/store';

import arrow from 'src/ui/assets/images/icon/arrowRight.svg';
import polygon from 'src/ui/assets/images/icon/Polygon.svg';
import polygonDark from 'src/ui/assets/images/icon/PolygonDark.svg';

import StyledSelect from './SelectFilterBox.styles';

type PropsType = {
  children: React.ReactNode;
  title: string;
};

const FilterBox: React.FC<PropsType> = ({ children, title }) => {
  const [viewItems, setViewItems] = useState(false);

  const localTheme = useAppSelector((state) => state.userStore.theme);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(wrapperRef, setViewItems);

  const handlerViewItems = () => {
    setViewItems(!viewItems);
  };

  return (
    <StyledSelect
      view={viewItems}
      typeSelector={title !== 'Genre'}
      ref={wrapperRef}
    >
      <div onClick={handlerViewItems} className="select-box">
        <img
          className="select-box__polygon"
          src={localTheme === 'darkTheme' ? polygonDark : polygon}
          alt=""
        />

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
