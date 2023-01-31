import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import StyledComment from './Comments.styles';

interface IProps {
  img: string;
  authorName: string;
  text: string;
  date: string;
}

const ItemComment: React.FC<IProps> = ({ img, authorName, text, date }) => {
  dayjs.extend(relativeTime);
  const commentDate = dayjs(date).fromNow();

  return (
    <StyledComment>
      <div className="comment">
        <div className="comment__user">
          <img className="comment__user-photo" src={img} alt="" />
        </div>
        <div className="comment__user-data">
          <h3 className="comment__title">{authorName}</h3>
          <p className="comment__date">{commentDate}</p>
          <p className="comment__text">{text}</p>
        </div>
      </div>
    </StyledComment>
  );
};

export default ItemComment;
