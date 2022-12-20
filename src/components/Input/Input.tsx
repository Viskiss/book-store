import Styles from './Input.styles';

interface IProps {
  img: string;
  placeholder: string;
}

const Input: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles>
      <button className="search-input_button">
        <img src={props.img} alt="" />
      </button>
      <input className="search-input" placeholder={props.placeholder} />
    </Styles>
  );
};

export default Input;
