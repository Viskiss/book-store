import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import leftArrow from 'src/ui/assets/images/icon/leftArrow.svg';
import arrowRight from 'src/ui/assets/images/icon/arrowRight.svg';

import { useAppSelector } from 'src/redux/store';
import StyledPaginationBooks from './Pagination.styles';

const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const counter = useAppSelector((state) => state.bookStore.count);
  const numberPage = useAppSelector((state) => state.bookStore.pages);
  const maxPages = Math.ceil(counter / numberPage);

  useEffect(() => {
    searchParams.set('page', `${page}`);
    setSearchParams(searchParams);
  }, [page, searchParams, setSearchParams]);

  const previousPageClickHandler = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const nextPageClickHandler = () => {
    if (page === maxPages) {
      return;
    }
    setPage(page + 1);
  };

  const leftCounterClass = classNames({
    counter: true,
    'counter--selected': page === 1,
  });

  const centercounterClass = classNames({
    counter: true,
    'counter--selected': page > 1 && page < maxPages,
  });

  const rightcounterClass = classNames({
    counter: true,
    'counter--selected': page === maxPages,
  });

  return (
    <StyledPaginationBooks>
      <img
        className="previous-page__button page-button"
        src={leftArrow}
        onClick={previousPageClickHandler}
      />
      <div className="counter-block">
        <div className={leftCounterClass} />
        <div className={centercounterClass} />
        <div className={rightcounterClass} />
      </div>
      <img
        className="next-page__button page-button"
        src={arrowRight}
        onClick={nextPageClickHandler}
      />
    </StyledPaginationBooks>
  );
};

export default Pagination;
