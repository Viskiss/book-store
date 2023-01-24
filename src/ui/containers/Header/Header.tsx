import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Button from 'src/ui/components/Button';

import { useAppSelector } from 'src/redux/store';
import constants from 'src/utils/constants';
import AuthUserLinks from './AuthUserLinks';

import logo from './images/logoH.svg';
import loupe from './images/Search.svg';

import StyledHeader from './Header.styles';

const Header: React.FC = () => {
  const { routesLink } = constants;
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string>('');
  const user = useAppSelector((store) => store.userStore.user);

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
          <input onChange={(e) => handleChangeSearch(e)} value={filter} className="search-input" placeholder="Search" />
        </div>
        {!user ? (
          <>
            <Button className="auth-button">
              <Link to={routesLink.login}>Sign In</Link>
            </Button>
            <Button className="auth-button">
              <Link to={routesLink.signUp}>Sign Up</Link>
            </Button>
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
        {!user ? (
          <>
            <Button className="auth-button__small">
              <Link to={routesLink.login}>Log In</Link>
            </Button>
            <Button className="auth-button__small">
              <Link to={routesLink.signUp} />
              Sign Up
            </Button>
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
