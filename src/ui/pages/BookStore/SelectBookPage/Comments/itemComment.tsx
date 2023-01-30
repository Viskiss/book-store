import StyledComment from './Comments.styles';

interface IProps {
  img: string;
  authorName: string;
  text: string;
  date: Date;
}

const ItemComment: React.FC<IProps> = ({ img, authorName, text }) => {
  return (
    <StyledComment>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{authorName}</h3>
        <p>DAte</p>
        <p>{text}</p>
      </div>
    </StyledComment>
  );
};

export default ItemComment;
