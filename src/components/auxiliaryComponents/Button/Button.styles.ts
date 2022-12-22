import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 50px;
  margin: 8px;
  border-radius: 16px;
  font-weight: bold;
  border: none;
  background: #344966;
  cursor: pointer;
  margin: 0;
  color: #f0f4ef;
  
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #f0f4ef;
    font-family: "Poppins";
    text-decoration: none;

    :hover {
    color: #bfcc94;
  }
  }

  :hover {
    color: #bfcc94;
    background: #0d1821;
  }
`;

export default Button;
