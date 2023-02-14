import type { Dispatch, SetStateAction } from 'react';

import { useNavigate } from 'react-router-dom';

import fillLike from 'src/ui/assets/images/icon/fillHeart.svg';

import Button from 'src/ui/components/Button';

interface IProps {
  bookId: number;
  cover: string;
  title: string;
  author: string;
  setDeleteBook: Dispatch<SetStateAction<number>>;
}

const ItemLike: React.FC<IProps> = ({ bookId, cover, title, author, setDeleteBook }) => {
  const navigate = useNavigate();

  const handleUnlikedBook = (bookId: number) => {
    setDeleteBook(bookId);
  };

  const selectBook = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();
    navigate(`/book/${id}`);
  };

  return (
    <>
      <div className="item-liked__box">
        <div className="item-liked__box-cover">
          <img onClick={(e) => selectBook(e, bookId)} className="item-liked__cover" src={cover} alt="" />
          <Button
            onClick={() => handleUnlikedBook(bookId)}
            className="item-liked__like"
          >
            <img className="item-liked__like-img" src={fillLike} alt="Heart" />
          </Button>
        </div>
        <div className="item-liked__box-data">
          <h1
            className="item-liked__box-title"
          >
            {title}
          </h1>
          <p className="item-liked__box-author">{author}</p>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default ItemLike;
