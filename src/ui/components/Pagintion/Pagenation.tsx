import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import leftArrow from 'src/ui/assets/images/leftArrow.svg';
import arrowRight from 'src/ui/assets/images/arrowRight.svg';

import { useAppSelector } from 'src/redux/store';
import StyledPaginationBooks from './Pagination.styles';

const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page') || 1));
  const counter = useAppSelector((state) => state.bookStore.count);
  const numberPerPage = useAppSelector((state) => state.bookStore.pages);
  const maxPages = Math.ceil(counter / numberPerPage);

  useEffect(() => {
    searchParams.set('page', `${page}`);
    setSearchParams(searchParams);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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

  const leftIndicatorClass = classNames({
    // eslint-disable-next-line quote-props
    'indicator': true,
    'indicator--selected': (page === 1),
  });

  const centerIndicatorClass = classNames({
    // eslint-disable-next-line quote-props
    'indicator': true,
    'indicator--selected': (page > 1 && page < maxPages),
  });

  const rightIndicatorClass = classNames({
    // eslint-disable-next-line quote-props
    'indicator': true,
    'indicator--selected': page === maxPages,
  });

  return (
    <StyledPaginationBooks>
      <img
        className="previous-page__button page-button"
        src={leftArrow}
        onClick={previousPageClickHandler}
      />
      <div className="indicator-block">
        <div className={leftIndicatorClass} />
        <div className={centerIndicatorClass} />
        <div className={rightIndicatorClass} />
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
