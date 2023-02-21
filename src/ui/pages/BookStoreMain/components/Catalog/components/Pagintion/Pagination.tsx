import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import { localTheme } from 'src/utils/constants';

import leftArrow from 'src/ui/assets/images/icon/leftArrow.svg';
import arrowRight from 'src/ui/assets/images/icon/arrowRight.svg';

import { useAppSelector } from 'src/redux/store';
import Button from 'src/ui/components/Button';
import StyledPaginationBooks from './Pagination.styles';

const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;

  const counter = useAppSelector((state) => state.bookStore.count);
  const numberPage = useAppSelector((state) => state.bookStore.pages);
  const maxPages = Math.ceil(counter / numberPage);

  const maxPagesDot = () => {
    const pages = Math.ceil(counter / numberPage);
    if (pages === 1) {
      return 2;
    }
    return pages;
  };

  useEffect(() => {
    if (page > 1 && counter <= 13) {
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    } else {
      searchParams.set('page', `${page}`);
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, setSearchParams]);

  const handlerClickFirstDot = () => {
    if (page === 1) {
      return;
    }
    searchParams.set('page', String(page - 1));
    setSearchParams(searchParams);
  };

  const handlerClickNextDot = () => {
    searchParams.set('page', String(page + 1));
    setSearchParams(searchParams);
  };

  return (
    <StyledPaginationBooks dark={localTheme()}>
      <Button
        disabled={page === 1}
        onClick={handlerClickFirstDot}
        className="pagination-button"
      >
        <img className="previous-page__button page-button" src={leftArrow} />
      </Button>
      <div className="counter-block">
        <button
          onClick={handlerClickFirstDot}
          className={classNames({
            counter: true,
            'counter-selected': page === 1,
          })}
        />
        <button
          disabled={counter < 22}
          onClick={
            page === maxPages ? handlerClickFirstDot : handlerClickNextDot
          }
          className={classNames({
            counter: true,
            'counter-selected': page > 1 && page < maxPagesDot(),
          })}
        />
        <button
          disabled={page === maxPages && page === 1}
          onClick={handlerClickNextDot}
          className={classNames({
            counter: true,
            'counter-selected': page === maxPagesDot(),
          })}
        />
      </div>
      <Button
        disabled={page === maxPages}
        onClick={handlerClickNextDot}
        className="pagination-button"
      >
        <img className="next-page__button page-button" src={arrowRight} />
      </Button>
    </StyledPaginationBooks>
  );
};

export default Pagination;
