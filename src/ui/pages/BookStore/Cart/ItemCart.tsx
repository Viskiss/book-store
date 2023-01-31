import decrement from 'src/ui/assets/images/icon/decrement.svg';
import increment from 'src/ui/assets/images/icon/increment.svg';
import trashBox from 'src/ui/assets/images/icon/Delete.svg';
import { useAppDispatch } from 'src/redux/store';
import {
  addCopyBook,
  deleteBookInCart,
  deleteCopyBook,
} from '../redux/thunks/cartThunks';

interface IProps {
  bookId: number;
  cartId: number;
  price: number;
  cover: string;
  title: string;
  author: string;
  quantityOfGoods: number;
}

const ItemCart: React.FC<IProps> = ({
  price,
  bookId,
  cartId,
  cover,
  title,
  author,
  quantityOfGoods,
}) => {
  const dispatch = useAppDispatch();

  const handleDeleteBook = (cartId: number) => {
    dispatch(deleteBookInCart(cartId));
  };

  const handleAddCopyBook = (bookId: number) => {
    dispatch(addCopyBook(bookId));
  };

  const handleDeleteCopyBook = (bookId: number) => {
    dispatch(deleteCopyBook(bookId));
  };

  return (
    <>
      <div className="item-cart__box">
        <div className="item-cart__box-cover">
          <img className="item-cart__cover" src={cover} alt="" />
        </div>
        <div>
          <h1 className="item-cart__box-title">{title}</h1>
          <p className="item-cart__box-author">{author}</p>
          <div className="item-cart__box-filter">
            <div>
              <button
                onClick={() => handleDeleteCopyBook(bookId)}
                className="item-cart__box-button"
              >
                <img className="box-button__dec" src={decrement} alt="" />
              </button>
              <span className="quantity">{quantityOfGoods}</span>
              <button
                onClick={() => handleAddCopyBook(bookId)}
                className="item-cart__box-button"
              >
                <img className="box-button__inc" src={increment} alt="" />
              </button>
            </div>
            <img
              onClick={() => handleDeleteBook(cartId)}
              className="item-cart__box-trash"
              src={trashBox}
              alt=""
            />
          </div>
          <p className="item-cart__box-price">${price}USD</p>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default ItemCart;
