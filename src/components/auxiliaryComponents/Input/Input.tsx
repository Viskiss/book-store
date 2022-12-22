import type { ChangeEventHandler } from 'react';
import Styles from './Input.styles';

interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  img: string;
  placeholder: string;
  value: string;
  name: string;
  label: string;
  errors: string | undefined;
  touched: boolean | undefined;
}

const Input: React.FC<IProps> = (props: IProps) => {
  return (
    <Styles>
      <button className="search-input_button">
        <img src={props.img} alt="" />
      </button>
      <input
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        className="search-input"
        placeholder={props.placeholder}
      />
      {props.touched && props.errors ? (
        <div className="label-error">{props.errors}</div>
      ) : (
        <div className="label">{props.label}</div>
      )}
    </Styles>
  );
};

export default Input;
