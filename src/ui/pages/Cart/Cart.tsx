import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/redux/store';

import Button from 'src/ui/components/Button';
import TextBlock from 'src/ui/components/TextBlock';

import booksImg from 'src/ui/assets/images/books.svg';
import { navigationRoutes } from 'src/utils/constants';

import ItemCart from './ItemCart';

import StyledCart from './Cart.styles';
import {
  changeCopyBookThunk,
  deleteBookInCartThunk,
  getCartThunk,
} from '../BookStoreMain/redux/thunks/cartThunks';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const cart = useAppSelector((store) => store.bookStore.cart);
  const user = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    dispatch(getCartThunk(user?.id || 0));
  }, [dispatch, user?.id]);

  useEffect(() => {
    const price = cart.reduce(
      (acc, item) => acc + item.price * item.quantityOfGoods,
      0,
    );
    setTotal(Number(price.toFixed(2)));
  }, [cart]);

  const handlerDeleteBook = (cartId: number) => {
    dispatch(deleteBookInCartThunk(cartId));
  };

  const handlerChangeCopyBook = (bookId: number, mark: number) => {
    dispatch(changeCopyBookThunk({ bookId, mark }));
  };

  return (
    <StyledCart>
      {cart.length ? (
        <>
          <div className="cart__books">
            {cart.map((cart) => (
              <ItemCart
                handlerChangeCopyBook={handlerChangeCopyBook}
                handlerDeleteBook={handlerDeleteBook}
                cart={cart}
                key={cart.id}
              />
            ))}
          </div>
          <div className="cart__buttons-box">
            <p className="cart__total-title">
              Total:<span className="cart__total"> {total}</span>
            </p>
            <Button
              onClick={() => navigate(navigationRoutes.home)}
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
