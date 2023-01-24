import { Link } from 'react-router-dom';

import Button from 'src/ui/components/Button';

import constants from 'src/utils/constants';

import cart from './images/Cart.svg';
import like from './images/Heart.svg';
import profile from './images/User.svg';

const AuthUserLinks: React.FC = () => {
  const { routesLink } = constants;

  return (
    <div className="round-buttons">
          <Button className="round-button">
            <Link to={routesLink.cart}>
              <img src={cart} alt="Cart" />
            </Link>
          </Button>
          <Button className="round-button2 round-button">
            <Link to={routesLink.likes}>
              <img src={like} alt="Heart" />
            </Link>
          </Button>
          <Button className="round-button">
            <Link to={routesLink.profile}>
              <img src={profile} alt="Profile" />
            </Link>
          </Button>
    </div>
  );
};

export default AuthUserLinks;
