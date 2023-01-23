import { useAppDispatch, useAppSelector } from 'redux/store';

import Button from 'ui/components/Button/Button.styles';
import TextBlock from 'ui/components/TextBlock/TextBlock';
import { useEffect } from 'react';

import booksImg from './images/books.svg';

import StyledCart from './Cart.styles';
import { getCartBooks } from '../redux/thunks/cartThunks';
import ItemCart from './ItemCart';

const Cart: React.FC = () => {
  const cart = useAppSelector((store) => store.bookStore.cart);
  const user = useAppSelector((store) => store.userStore.user);
  const isAuthenticated = useAppSelector(
    (state) => state.userStore.isAuthenticated,
  );

  // eslint-disable-next-line no-console
  console.log(cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (!isAuthenticated) {
        return;
      }
      await dispatch(getCartBooks(user?.id || 0));
    })();
  }, [isAuthenticated, dispatch, user?.id]);

  return (
    <StyledCart>
      {cart.length ? (
        <>
          <div className="cart_container">
            {cart.map((item) => (
              <ItemCart
              author={item.author}
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
              Total:<span className="cart--total">00</span>
            </p>
            <Button className="cart-button">Continue shopping</Button>
            <Button className="simple-button">Chekout</Button>
          </div>
        </>
      ) : (<div className="cart_container">
        <img className="img_book" src={booksImg} alt="" />
        <TextBlock
          h1="Your cart is empty"
          className="simple-button"
          link="/"
          title="Go to catalog"
          p="Add items to cart to make a purchase.Go to the catalogue no."
          key={0}
        />
           </div>)}

    </StyledCart>
  );
};

export default Cart;
