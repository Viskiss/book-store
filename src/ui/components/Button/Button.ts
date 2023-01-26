import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 50px;
  margin: 8px;
  border-radius: 16px;
  font-weight: bold;
  border: none;
  background-color: ${(props) => props.theme.color.blue};
  cursor: pointer;
  margin: 0;
  color: #f0f4ef;
  
  :hover {
    background: ${(props) => props.theme.color.dark};
  }

  &:disabled {
    background: #B9BAC4;
    color: #F0F4EF;
  }
`;

export default Button;
