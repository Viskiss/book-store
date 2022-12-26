import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Header.styles';
import Button from '../../../auxiliaryComponents/Button/RoundButtonLink';
import logo from '../images/logoH.svg';
import loupe from '../images/Search.svg';
import cart from '../images/Cart.svg';
import like from '../images/Heart.svg';
import profile from '../images/User.svg';
import { useAppSelector } from '../../../../redux/store';
import ButtonLink from '../../../auxiliaryComponents/Button/ButtonLink';

const Header: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  const auth = useAppSelector((store) => store.bookData.user.email);
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
            <ButtonLink className="auth-button" link="/logIn" title="Log In" />
            <ButtonLink
              className="auth-button"
              link="/signUp"
              title="Sign Up"
            />
          </>
        ) : (
          <div>
            <Button link="/cart">
              <img src={cart} alt="" />
            </Button>
            <Button link="likes">
              <img src={like} alt="" />
            </Button>
            <Button link="profile">
              <img src={profile} alt="" />
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
              <ButtonLink
                className="auth-button__small"
                link="/logIn"
                title="Log In"
              />
              <ButtonLink
                className="auth-button__small"
                link="/signUp"
                title="Sign Up"
              />
            </>
          ) : (
            <div>
              <Button link="/cart">
                <img src={cart} alt="" />
              </Button>
              <Button link="likes">
                <img src={like} alt="" />
              </Button>
              <Button link="profile">
                <img src={profile} alt="" />
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
