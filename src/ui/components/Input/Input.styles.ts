import styled from 'styled-components';

export default styled.section`
  position: relative;
  padding-right: 54px;

  .form-input {
    padding: 20px 34px 20px 64px;
    background: ${(props) => props.theme.color.background.light};
    border-radius: ${(props) => props.theme.border.radius.main};
    border: none;
    font-weight: ${(props) => props.theme.font.weight.s};
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    position: relative;
    transition: 0.5s;
  }

  .error-input {
    border: ${(props) => props.theme.border.errorInput};
  }

  .form-input::placeholder {
    color: ${(props) => props.theme.color.text.medium};
  }

  .form-input_button {
    padding: 22px 20px;
    position: absolute;
    border: none;
    background-color: initial;
    z-index: 100;
  }

  .label {
    width: fit-content;
    color: ${(props) => props.theme.color.text.main};
    font-weight: ${(props) => props.theme.font.weight.m};
    font-size: ${(props) => props.theme.font.size.s};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    margin-bottom: 30px;
    margin-right: 0;
    padding-top: 10px;
  }

  .label-error {
    color: ${(props) => props.theme.color.error.main};
    font-weight: ${(props) => props.theme.font.weight.xl};
    font-size: ${(props) => props.theme.font.size.s};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    margin-bottom: 40px;
    padding-top: 10px;
  }
`;
