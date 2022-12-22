import Styles from './Footer.styles';
import logo from '../../images/logo/logoF.svg';
import map from '../../images/map.png';

const Footer: React.FC = () => {
  return (
    <Styles>
      <div className="footer_container">
        <div className="logo-box">
          <img className="logo" src={logo} alt="" />
          <p>tranthuy.nute@gmail.com</p>
          <p>(480) 555-0103</p>
        </div>
        <div>
          <p>Home Page</p>
          <p>Catalog</p>
          <p>My Account</p>
          <p>Cart</p>
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
