import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../../redux/store';

import Button from '../../../components/Button/RoundButtonLink';
import ButtonLink from '../../../components/Button/ButtonLink';

import logo from '../images/logoH.svg';
import loupe from '../images/Search.svg';
import cart from '../images/Cart.svg';
import like from '../images/Heart.svg';
import profile from '../images/User.svg';

import Styles from './Header.styles';

const Header: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const auth = useAppSelector((store) => store.userRoot.user?.email);
  useEffect(() => {
    if (auth) {
      setIsAuth(true);
    }
  }, [auth]);

  return (
    <Styles>
      <div className="header_container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link className="catalog-link" to="/">
          Catalog
        </Link>
        <div className="search">
          <button className="search-input_button">
            <img src={loupe} alt="" />
          </button>
          <input className="search-input" placeholder="Search" />
        </div>
        {!isAuth ? (
          <>
            <ButtonLink className="auth-button">
              <Link to="/log-in">Log In</Link>
            </ButtonLink>
            <ButtonLink className="auth-button">
              <Link to="/sign-up">Sign Up</Link>
            </ButtonLink>
          </>
        ) : (
          <div className="round-buttons">
            <Button className="round-button">
              <Link to="/cart">
                <img src={cart} alt="" />
              </Link>
            </Button>
            <Button className="round-button2 round-button">
              <Link to="likes">
                <img src={like} alt="" />
              </Link>
            </Button>
            <Button className="round-button">
              <Link to="profile">
                <img src={profile} alt="" />
              </Link>
            </Button>
          </div>
        )}
      </div>
      <div className="small-width">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link className="catalog-link" to="/">
          Catalog
        </Link>
        {!isAuth ? (
          <>
            <ButtonLink className="auth-button__small">
              <Link to="/log-in">Log In</Link>
            </ButtonLink>
            <ButtonLink className="auth-button__small">
              <Link to="/sign-up" />
              Sign Up
            </ButtonLink>
          </>
        ) : (
          <div>
            <Button>
              <Link to="/cart">
                <img src={cart} alt="" />
              </Link>
            </Button>
            <Button>
              <Link to="likes">
                <img src={like} alt="" />
              </Link>
            </Button>
            <Button>
              <Link to="profile">
                <img src={profile} alt="" />
              </Link>
            </Button>
          </div>
        )}
        <div className="search">
          <button className="search-input_button">
            <img src={loupe} alt="" />
          </button>
          <input className="search-input" placeholder="Search" />
        </div>
      </div>
    </Styles>
  );
};

export default Header;
