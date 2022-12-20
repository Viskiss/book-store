import styled from 'styled-components';

export default styled.section`
  padding: 80px 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #f0f4ef;
  display: flex;

  .login_container {
    width: 1280px;
    display: flex;
     justify-content: space-between;
  }

  .login-form {
    display: flex;
    flex-direction: column;
  }

  label {
    color: #0d1821;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 40px;
    padding-top: 10px;
  }

  h1 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin-bottom: 60px;
    margin-top: 0;
  }

  button {
    margin-right: 316px;
  }

`;
