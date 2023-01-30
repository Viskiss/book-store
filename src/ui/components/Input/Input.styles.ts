import styled from 'styled-components';

export default styled.section`
  position: relative;
  padding-right: 54px;

  .form-input {
    padding: 20px 34px 20px 64px;
    background: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.border.default};
    border: none;
    font-weight: ${(props) => props.theme.fontWeight.small};
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    position: relative;
  }

  .error-input {
    border: ${(props) => props.theme.border.errorInput};
  }

  .form-input::placeholder {
    color: ${(props) => props.theme.color.grey};
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
    color: ${(props) => props.theme.color.dark};
    font-weight: ${(props) => props.theme.fontWeight.middle};
    font-size: ${(props) => props.theme.fontSize.fs14};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    margin-bottom: 30px;
    margin-right: 0;
    padding-top: 10px;
  }

  .label-error {
    color: ${(props) => props.theme.color.red};
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: ${(props) => props.theme.fontSize.fs14};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    margin-bottom: 40px;
    padding-top: 10px;
  }
`;
