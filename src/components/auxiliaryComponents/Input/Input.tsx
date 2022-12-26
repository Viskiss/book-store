import type { ChangeEventHandler } from 'react';
import { useState } from 'react';
import Styles from './Input.styles';

interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  img: string;
  placeholder: string;
  value: string;
  name: string;
  label?: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
  type?: string;
  disabled?: boolean;
}

const Input: React.FC<IProps> = (props: IProps) => {
  const [typeInput, setTypeInput] = useState(props.type);

  const changeTypeHandler = (
    type: string,
    e: React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();
    if (type === '') {
      setTypeInput('');
    }
    if (typeInput === '') {
      setTypeInput(props.type);
    }
  };
  return (
    <Styles>
      <button onClick={(e) => changeTypeHandler('', e)} type="button" className="search-input_button">
        <img src={props.img} alt="" />
      </button>
      <input
        disabled={props.disabled}
        type={typeInput}
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
