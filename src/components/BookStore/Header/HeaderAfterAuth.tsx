import { useState } from 'react';
import Styles from './Header.styles';
import Button from '../../Button/RoundButton';
import logo from '../../images/logo/logoH.svg';
import loupe from '../../images/Search.svg';
import cart from '../../images/header/Cart.svg';
import like from '../../images/header/Heart.svg';
import profile from '../../images/header/User.svg';

const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'));

  return (

    <Styles>
      <div className="header_container">
        <img className="logo" src={logo} alt="" />
        <a className="catalog-link" href="">
          Catalog
        </a>
        <div className="search">
          <button className="search-input_button">
            <img src={loupe} alt="" />
          </button>
          <input className="search-input" placeholder="Search" />
        </div>
        {isLogin
          ? <Button>Log In/ Sing Up</Button>
          : (<div>
            <Button className="round-button">
              <img src={cart} alt="" />
            </Button>
            <Button className="round-button">
              <img src={like} alt="" />
            </Button>
            <Button className="round-button">
              <img src={profile} alt="" />
            </Button>
             </div>)}
      </div>
    </Styles>
  );
};

export default Header;
