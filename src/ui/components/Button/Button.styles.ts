import styled from 'styled-components';

const Button = styled.button<{ className: string }>`
    padding: ${(props) => (props.className === 'simple-button' ? '10px 50px' : '10px 15px')};;
    margin: 8px;
    border-radius: 16px;
    font-weight: bold;
    border: none;
    background-color: #344966;
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
    }

    :hover {
      background: #0D1821;;
    }

    .disabled-button {
      background: #B9BAC4;
      color: #F0F4EF;
    }
   

`;

export default Button;
