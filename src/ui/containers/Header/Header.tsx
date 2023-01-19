import { Link } from 'react-router-dom';

import ButtonLink from 'ui/components/Button/ButtonLink';
import AuthUserLinks from './AuthUserLinks';

import { useAppSelector } from '../../../redux/store';
import constants from '../../../utils/constants';

import logo from './images/logoH.svg';
import loupe from './images/Search.svg';

import StyledHeader from './Header.styles';

const Header: React.FC = () => {
  const { routesLink } = constants;
  const user = useAppSelector((store) => store.userStore.user);

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
          <input className="search-input" placeholder="Search" />
        </div>
        {!user ? (
          <>
            <ButtonLink className="auth-button">
              <Link to={routesLink.login}>Log In</Link>
            </ButtonLink>
            <ButtonLink className="auth-button">
              <Link to={routesLink.signUp}>Sign Up</Link>
            </ButtonLink>
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
            <ButtonLink className="auth-button__small">
              <Link to={routesLink.login}>Log In</Link>
            </ButtonLink>
            <ButtonLink className="auth-button__small">
              <Link to={routesLink.signUp} />
              Sign Up
            </ButtonLink>
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
