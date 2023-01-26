import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import constants from 'src/utils/constants';

import Button from 'src/ui/components/Button';
import TextBlock from 'src/ui/components/TextBlock/TextBlock';

import { getCartBooks } from '../redux/thunks/cartThunks';

import ItemCart from './ItemCart';

import booksImg from './images/books.svg';

import StyledCart from './Cart.styles';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((store) => store.bookStore.cart);

  const isAuth = useAppSelector((store) => store.userStore.isAuthenticated);
  const user = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    if (!isAuth) {
      return;
    }
    dispatch(getCartBooks(user?.id || 0));
  });

  // const totalPrice = cart.reduce((a, b) => a + b.price, 0);

  // const totalPrice = () => {
  //   let total = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     total += cart[i].price;
  //   }
  //   return total;
  // };

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
                bookId={item.id}
                cover={item.cover}
                price={item.price}
                key={item.id}
              />
            ))}
          </div>
          <div>
            <p>
              Total:<span className="cart__total">00</span>
            </p>
            <Button onClick={() => navigate(constants.routesLink.home)} className="cart-button">Continue shopping</Button>
            <Button>Chekout</Button>
          </div>
        </>
      ) : (
        <div className="cart-container">
          <img className="img_book" src={booksImg} alt="" />
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
