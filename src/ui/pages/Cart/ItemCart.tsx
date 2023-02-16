import { useNavigate } from 'react-router-dom';

import type { CartType } from 'src/types/bookStoreTypes';

import trashBox from 'src/ui/assets/images/icon/Delete.svg';
import decrement from 'src/ui/assets/images/icon/decrement.svg';
import increment from 'src/ui/assets/images/icon/increment.svg';

type PropType = {
  cart: CartType;
  handleDeleteBook: (id: number) => void;
  handleChangeCopyBook: (bookId: number, mark: number) => void;
};

const ItemCart: React.FC<PropType> = ({
  cart: { price, bookId, id, cover, title, author, quantityOfGoods },
  handleDeleteBook,
  handleChangeCopyBook,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="item-cart__box">
        <div className="item-cart__box-cover">
          <img className="item-cart__cover" src={cover} alt="" />
        </div>

        <div>
          <h1
            onClick={() => navigate(`/book/${bookId}`)}
            className="item-cart__box-title"
          >
            {title}
          </h1>
          <p className="item-cart__box-author">{author}</p>
          <div className="item-cart__box-filter">
            <div>
              <button
                onClick={() => handleChangeCopyBook(bookId, 0)}
                className="item-cart__box-button"
              >
                <img className="box-button__dec" src={decrement} alt="" />
              </button>
              <span className="quantity">{quantityOfGoods}</span>
              <button
                onClick={() => handleChangeCopyBook(bookId, 1)}
                className="item-cart__box-button"
              >
                <img className="box-button__inc" src={increment} alt="" />
              </button>
            </div>

            <img
              onClick={() => handleDeleteBook(id)}
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
