import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/store';
import TextBlock from '../../auxiliaryComponents/TextBlock';
import books from './images/books.svg';
import Styles from './Cart.styles';

const Cart: React.FC = () => {
  const [emptyCart, setEmptyCart] = useState(false);

  const cart = useAppSelector((store) => store.bookData.cart.length);

  useEffect(() => {
    if (cart) {
      setEmptyCart(true);
    }
  }, [cart]);

  return (
    <Styles>
      <div className="cart_container">
        {emptyCart ? (
          <>j</>
        ) : (
          <>
          <img className="img_book" src={books} alt="" />

            <TextBlock
              h1="Your cart is empty"
              p="Add items to cart to make a purchase.Go to the catalogue no."
              title="Go to catalog"
              link="/catalog"
              className="simple-button"
            />
          </>
        )}
      </div>
    </Styles>
  );
};

export default Cart;
