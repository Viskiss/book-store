import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/naming-convention
type ButtonProps = {
  isRounded?: boolean;
};

const Button = styled.button<ButtonProps>`
  padding: ${(props) => (props.className === 'simple-button' ? '10px 50px' : '10px 15px')};;
  margin: 8px;
  border-radius: 16px;
  font-weight: bold;
  border: none;
  background-color: #344966;
  cursor: pointer;
  margin: 0;
  color: #f0f4ef;

  /* padding: 10px 50px;
  border-radius: 16px;
  border: none;
  background: #344966;
  cursor: pointer;
  color: #f0f4ef;
  padding: 11px 12px 8px 12px;
  border-radius: 50px; */
  
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #f0f4ef;
    font-family: "Poppins";
    text-decoration: none;
  }

  :hover {
    background: #0D1821;;
  }

  &:disabled {
    background: #B9BAC4;
    color: #F0F4EF;
  }
`;

export default Button;
