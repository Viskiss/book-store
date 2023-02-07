import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Button from 'src/ui/components/Button';

import constants from 'src/utils/constants';
import tokenHelper from 'src/utils/tokenHelper';

import logo from 'src/ui/assets/images/logoH.svg';
import loupe from 'src/ui/assets/images/icon/Search.svg';

import { useDebounce } from 'src/hooks';
import AuthUserLinks from './AuthUserLinks';

import StyledHeader from './Header.styles';

const Header: React.FC = () => {
  const { routesLink } = constants;

  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string>('');

  const debouncedFilter = useDebounce(filter, 1000);

  const token = tokenHelper.token.get();

  useEffect(() => {
    if (debouncedFilter) {
      searchParams.set('search', debouncedFilter as string);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilter]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <StyledHeader>
      <div className="logo-box">
        <Link className="logo__link" to={routesLink.home}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="catalog-link-box">
        <Link className="catalog-link" to={routesLink.home}>
          Catalog
        </Link>
      </div>
      <div className="search">
        <button className="search-input_button">
          <img src={loupe} alt="" />
        </button>
        <input
          onChange={(e) => handleChangeSearch(e)}
          value={filter}
          className="search-input"
          placeholder="Search"
        />
      </div>
      {!token ? (
        <div className="round-buttons ">
          <Link to={routesLink.signIn}>
            <Button className="auth-button">Sign In</Button>
          </Link>
          <Link to={routesLink.signUp}>
            <Button className="auth-button">Sign Up</Button>
          </Link>
        </div>
      ) : (
        <AuthUserLinks />
      )}
    </StyledHeader>
  );
};

export default Header;
