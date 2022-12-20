import Styles from './Header.styles';
import Button from '../../Button/Button';
import logo from '../../images/logo/logoH.svg';
import loupe from '../../images/Search.svg';

const Header: React.FC = () => {
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
        <Button>Log In/ Sing Up</Button>
      </div>
    </Styles>
  );
};

export default Header;
