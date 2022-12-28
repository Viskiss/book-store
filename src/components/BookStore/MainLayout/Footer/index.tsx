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
          <p className="text">tranthuy.nute@gmail.com</p>
          <p className="text">(480) 555-0103</p>
        </div>
        <div className="footer__router-links">
          <Link className="footer__router-link" to="/">
            Home Page
          </Link>
          <Link className="footer__router-link" to="/catalog">
            Catalog
          </Link>
          <Link className="footer__router-link" to="/profile">
            My Account
          </Link>
          <Link className="footer__router-link" to="/cart">
            Cart
          </Link>
        </div>
        <div className="map_location">
          <p className="text">6391 Elgin St. Celina, Delaware 10299</p>
          <img className="map_location-img" src={map} alt="" />
        </div>
      </div>
    </Styles>
  );
};

export default Footer;
