import type { FormikTouched } from 'formik';
import type { MouseEventHandler } from 'react';
import { useState } from 'react';

import Styles from './Input.styles';

interface IProps {
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
  classStyles?: string;
  img: string;
  placeholder: string;
  value: string;
  name: string;
  label?: string;
  errors?: string | undefined;
  touched?: FormikTouched<unknown>;
  type?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
    <Styles className="input-section">
      <button onClick={(e) => changeTypeHandler('', e)} type="button" className="form-input_button">
        <img src={props.img} alt="" />
      </button>
      <input
        disabled={props.disabled}
        type={typeInput}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        className={props.classStyles}
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
