import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import Button from 'src/ui/components/Button';

import tokenHelper from 'src/utils/tokenHelper';

import logo from 'src/ui/assets/images/logoH.svg';
import logoWhite from 'src/ui/assets/images/logoF.svg';
import loupe from 'src/ui/assets/images/icon/Search.svg';

import { navigationRoutes } from 'src/utils/constants';
import { useDebounce } from 'src/hooks/useDebounce';
import AuthUserLinks from './AuthUserLinks';

import StyledHeader from './Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchString, setSearchString] = useState('');

  const debouncedFilter = useDebounce(searchString, 500);

  const token = tokenHelper.token.get();

  const localTheme = localStorage.getItem('theme') === 'themeDark';

  useEffect(() => {
    if (debouncedFilter) {
      searchParams.set('search', debouncedFilter as string);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilter]);

  const handlerChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchParams.get('page')) {
      navigate(navigationRoutes.home);
    }
    setSearchString(e.target.value);
  };

  return (
    <StyledHeader dark={localTheme}>
      <div className="container">
        <div className="logo-box">
          <Link className="logo__link" to={navigationRoutes.home}>
            <img className="logo" src={localTheme ? logoWhite : logo} alt="" />
          </Link>
        </div>

        <div className="catalog-link-box">
          <Link className="catalog-link" to={navigationRoutes.home}>
            Catalog
          </Link>
        </div>

        <div className="search">
          <button className="search-input_button">
            <img src={loupe} alt="" />
          </button>
          <input
            onChange={handlerChangeSearch}
            value={searchString}
            className="search-input"
            placeholder="Search"
          />
        </div>

        {!token ? (
          <div className="round-buttons">
            <Link to={navigationRoutes.signIn}>
              <Button className="auth-button">Sign In</Button>
            </Link>
            <Link to={navigationRoutes.signUp}>
              <Button className="auth-button">Sign Up</Button>
            </Link>
          </div>
        ) : (
          <AuthUserLinks />
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
