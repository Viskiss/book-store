import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/redux/store';

import Button from 'src/ui/components/Button';

import constants from 'src/utils/constants';

import like from 'src/ui/assets/images/icon/Heart.svg';
import cart from 'src/ui/assets/images/Cart.svg';
import profile from 'src/ui/assets/images/User.svg';

const AuthUserLinks: React.FC = () => {
  const { routesLink } = constants;
  const booksCount = useAppSelector((store) => store.bookStore.cart.length);

  return (
    <div className="round-buttons">
      <Link to={routesLink.cart}>
        <Button className="round-button round-button__count">
        <span className="books-counter">{booksCount}</span>
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
