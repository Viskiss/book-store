import Styles from './TextBlock.styles';
import Button from '../Button/Button';

interface IProps {
  h1: string;
  p: string;
  buttonText: string;
  img: string;
}

const TextBlock: React.FC<IProps> = (props: IProps) => {
  return (
  <Styles>
    <div className="block-text_main">
       <h1>{props.h1}</h1>
        <div className="block-text">
          <p>{props.p}</p>
        <Button>{props.buttonText}</Button>
        </div>
    </div>
       <img src={props.img} alt="" />
  </Styles>
  );
};

export default TextBlock;
