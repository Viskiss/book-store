import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 50px;
  margin: 8px;
  border-radius: ${(props) => props.theme.border.default};
  font-weight: bold;
  border: none;
  background-color: ${(props) => props.theme.color.blue};
  cursor: pointer;
  margin: 0;
  color: ${(props) => props.theme.color.white};

  &:disabled {
    background: ${(props) => props.theme.color.grey};
    color: ${(props) => props.theme.color.white};
    cursor: default;
  }
`;

export default Button;
