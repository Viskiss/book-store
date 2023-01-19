import type { FormikTouched } from 'formik';
import type { MouseEventHandler } from 'react';
import React, { useState } from 'react';

import view from 'ui/assets/images/View.svg';

import StyledInput from './Input.styles';

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
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
  const [typeImg, setTypeImg] = useState(props.img);

  let fieldName = 'password';
  if (props.name === 'newPassword') {
    fieldName = props.name;
  }
  if (props.name === 'repeatPassword') {
    fieldName = props.name;
  }

  const changeTypeHandler = (
    type: string,
    e: React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();
    if (type === '' && props.name === fieldName) {
      setTypeInput('');
      setTypeImg(view);
    }
    if (typeInput === '' && props.name === fieldName) {
      setTypeInput(props.type);
      setTypeImg(props.img);
    }
  };

  return (
    <StyledInput className="input-section">
      <button
        onClick={(e) => changeTypeHandler('', e)}
        type="button"
        className="form-input_button"
        >
        <img src={typeImg} alt="" />
      </button>
      <input
        disabled={props.disabled}
        type={typeInput}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        className={props.classStyles}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
      />
      {props.touched && props.errors ? (
        <div className="label-error">{props.errors}</div>
      ) : (
        <div className="label">{props.label}</div>
      )}
    </StyledInput>
  );
};

export default Input;
