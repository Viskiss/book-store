import { Link } from 'react-router-dom';

import logo from 'src/ui/assets/images/logoF.svg';
import map from 'src/ui/assets/images/map.png';
import constants from 'src/utils/constants';

import StyledFooter from './Footer.styles';

const Footer: React.FC = () => {
  const { routesLink } = constants;
  return (
    <StyledFooter>
      <div className="footer_container">
        <div className="logo-box">
          <img className="logo" src={logo} alt="" />
          <p className="text">tranthuy.nute@gmail.com</p>
          <p className="text">(480) 555-0103</p>
        </div>

        <nav className="footer__router-links">
          <Link className="footer__router-link" to={routesLink.home}>
            Home Page
          </Link>
          <Link className="footer__router-link" to={routesLink.home}>
            Catalog
          </Link>
          <Link className="footer__router-link" to={routesLink.profile}>
            My Account
          </Link>
          <Link className="footer__router-link" to={routesLink.cart}>
            Cart
          </Link>
        </nav>

        <div className="map_location">
          <p className="text">6391 Elgin St. Celina, Delaware 10299</p>
          <img className="map_location-img" src={map} alt="" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
