import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch } from 'src/redux/store';

import trashBox from 'src/ui/assets/images/icon/Delete.svg';

import decrement from 'src/ui/assets/images/icon/decrement.svg';
import increment from 'src/ui/assets/images/icon/increment.svg';

import {
  addCopyBook,
  deleteBookInCart,
  deleteCopyBook,
} from '../../pages/BookStore/redux/thunks/cartThunks';
import { getSelectBookThunk } from '../../pages/BookStore/redux/thunks/bookStoreThunks';

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
  const navigate = useNavigate();
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

  const selectBook = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    try {
      dispatch(getSelectBookThunk(id));
      navigate(`/book/${id}`);
    } catch (err) {
      toast.error('Unexpected server error');
    }
  };

  return (
    <>
      <div className="item-cart__box">
        <div className="item-cart__box-cover">
          <img className="item-cart__cover" src={cover} alt="" />
        </div>
        <div>
          <h1 onClick={(e) => selectBook(e, bookId)} className="item-cart__box-title">{title}</h1>
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
