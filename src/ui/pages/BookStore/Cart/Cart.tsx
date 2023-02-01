import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import constants from 'src/utils/constants';

import Button from 'src/ui/components/Button';
import TextBlock from 'src/ui/components/TextBlock';

import booksImg from 'src/ui/assets/images/books.svg';

import { getCartBooks } from '../redux/thunks/cartThunks';

import ItemCart from './ItemCart';

import StyledCart from './Cart.styles';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const cart = useAppSelector((store) => store.bookStore.cart);
  const isAuth = useAppSelector((store) => store.userStore.isAuthenticated);
  const user = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    dispatch(getCartBooks(user?.id || 0));
  }, [dispatch, isAuth, user?.id, cart.length]);

  useEffect(() => {
    const price = cart.reduce(
      (acc, item) => acc + item.price * item.quantityOfGoods,
      0,
    );
    setTotal(Number(price.toFixed(2)));
  }, [cart]);

  return (
    <StyledCart>
      {cart.length ? (
        <>
          <div className="cart__books">
            {cart.map((item) => (
              <ItemCart
                author={item.author}
                quantityOfGoods={item.quantityOfGoods}
                title={item.title}
                bookId={item.bookId}
                cartId={item.id}
                cover={item.cover}
                price={item.price}
                key={item.id}
              />
            ))}
          </div>
          <div className="cart__buttons-box">
            <p className="cart__total-title">
              Total:<span className="cart__total"> {total}</span>
            </p>
            <Button
              onClick={() => navigate(constants.routesLink.home)}
              className="cart-button"
            >
              Continue shopping
            </Button>
            <Button className="cart-button-checkout">Chekout</Button>
          </div>
        </>
      ) : (
        <div className="cart-container">
          <img className="cart-container__img" src={booksImg} alt="" />
          <TextBlock
            h1="Your cart is empty"
            className="simple-button"
            link="/"
            title="Go to catalog"
            p="Add items to cart to make a purchase.Go to the catalogue no."
            key={0}
          />
        </div>
      )}
    </StyledCart>
  );
};

export default Cart;
