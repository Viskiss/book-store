import { useNavigate } from 'react-router-dom';

import fillLike from 'src/ui/assets/images/icon/fillHeart.svg';

import Button from 'src/ui/components/Button';

type PropType = {
  bookId: number;
  cover: string;
  title: string;
  author: string;
  setDeleteBook: (bookId: number) => void;
};

const ItemLike: React.FC<PropType> = ({ bookId, cover, title, author, setDeleteBook }) => {
  const navigate = useNavigate();

  const selectBook = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    navigate(`/book/${id}`);
  };

  return (
    <>
      <div className="item-favorite__box">

        <div className="item-favorite__box-cover">
          <img onClick={(e) => selectBook(e, bookId)} className="item-favorite__cover" src={cover} alt="" />
          <Button
            onClick={() => setDeleteBook(bookId)}
            className="item-favorite__like"
          >
            <img className="item-favorite__like-img" src={fillLike} alt="Heart" />
          </Button>
        </div>

        <div className="item-favorite__box-data">
          <h1
            className="item-favorite__box-title"
          >
            {title}
          </h1>
          <p className="item-favorite__box-author">{author}</p>
        </div>

      </div>
      <div className="line" />
    </>
  );
};

export default ItemLike;
