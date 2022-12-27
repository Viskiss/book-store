import { Link } from 'react-router-dom';
import logo from '../images/logoF.svg';
import map from '../images/map.png';
import Styles from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <Styles>
      <div className="footer_container">
        <div className="logo-box">
          <img className="logo" src={logo} alt="" />
          <p>tranthuy.nute@gmail.com</p>
          <p>(480) 555-0103</p>
        </div>
        <div className="footer__router-link">
        <Link to="/">
            Home Page
        </Link>
        <Link to="/catalog">
            Catalog
        </Link>
        <Link to="/profile">
            My Account
        </Link>
        <Link to="/cart">
            Cart
        </Link>
        </div>
        <div className="map_location">
          <p>6391 Elgin St. Celina, Delaware 10299</p>
          <img src={map} alt="" />
        </div>
      </div>
    </Styles>
  );
};

export default Footer;
