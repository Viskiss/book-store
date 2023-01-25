import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/redux/store';

import Button from 'src/ui/components/Button';

import constants from 'src/utils/constants';

import cart from './images/Cart.svg';
import like from './images/Heart.svg';
import profile from './images/User.svg';

const AuthUserLinks: React.FC = () => {
  const { routesLink } = constants;
  const booksCount = useAppSelector((store) => store.bookStore.cart.length);

  return (
    <div className="round-buttons">
      <Link className="round-buttons__link-count" to={routesLink.cart}>
        <span className="books-counter">{booksCount}</span>
        <Button className="round-button">
          <img src={cart} alt="Cart" />
        </Button>
      </Link>
      <Link to={routesLink.likes}>
        <Button className="round-button">
          <img src={like} alt="Heart" />
        </Button>
      </Link>
      <Link to={routesLink.profile}>
        <Button className="round-button">
          <img src={profile} alt="Profile" />
        </Button>
      </Link>
    </div>
  );
};

export default AuthUserLinks;
