import Styles from './Auth.styles';
import logo from '../../images/logoF.svg';
import map from '../../images/map.png';

const Auth: React.FC = () => {
  return (
    <Styles>
      <div className="footer_container">
        <div>
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

export default Auth;
