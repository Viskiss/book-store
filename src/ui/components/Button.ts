import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 50px;
  margin: 8px;
  border-radius: ${(props) => props.theme.border.radius.main};
  font-weight: bold;
  border: none;
  background-color: ${(props) => props.theme.color.button.main};
  cursor: pointer;
  margin: 0;
  color: ${(props) => props.theme.color.text.light};

  &:disabled {
    background: ${(props) => props.theme.color.button.light};
    color: ${(props) => props.theme.color.text.light};
    cursor: default;
  }
`;

export default Button;
