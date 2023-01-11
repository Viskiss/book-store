import Button from '../../../components/Button/Button.styles';
import Styles from './ItemBook.styles';

interface IProps {
  img: string;
  title: string;
  rate : number;
  price: string;
  author: string;
  id: number;
}

const ItemBook: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles>
     <img src={props.img} alt="" />
     <h4>{props.title}</h4>
     <p>{props.author}</p>
     <p>{props.rate}</p>
     <Button className="simple-button">{props.price}</Button>
    </Styles>
  );
};

export default ItemBook;
