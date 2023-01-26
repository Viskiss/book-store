import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Button from 'src/ui/components/Button';

import constants from 'src/utils/constants';
import tokenHelper from 'src/utils/tokenHelper';
import AuthUserLinks from './AuthUserLinks';

import logo from './images/logoH.svg';
import loupe from './images/Search.svg';

import StyledHeader from './Header.styles';

const Header: React.FC = () => {
  const { routesLink } = constants;

  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string>('');

  const token = tokenHelper.token.get();

  useEffect(() => {
    searchParams.set('search', filter as string);
    if (!filter) {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  }, [filter, searchParams, setSearchParams]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <StyledHeader>
      <div className="header_container">
        <Link to={routesLink.home}>
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link className="catalog-link" to={routesLink.home}>
          Catalog
        </Link>
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
          <>
            <Link to={routesLink.signIn}>
              <Button className="auth-button">Sign In</Button>
            </Link>
            <Link to={routesLink.signUp}>
              <Button className="auth-button">Sign Up</Button>
            </Link>
          </>
        ) : (
          <AuthUserLinks />
        )}
      </div>
      <div className="small-width">
        <Link to={routesLink.home}>
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link className="catalog-link" to={routesLink.home}>
          Catalog
        </Link>
        {!token ? (
          <>
            <Link to={routesLink.signIn}>
              <Button className="auth-button__small">Log In</Button>
            </Link>
            <Link to={routesLink.signUp}>
              <Button className="auth-button__small">Sign Up</Button>
            </Link>
          </>
        ) : (
          <AuthUserLinks />
        )}
        <div className="search">
          <button className="search-input_button">
            <img src={loupe} alt="" />
          </button>
          <input className="search-input" placeholder="Search" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
