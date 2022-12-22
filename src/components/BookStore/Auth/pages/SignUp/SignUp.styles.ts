import styled from 'styled-components';

export default styled.section`
  padding: 60px 20px 150px 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  display: flex;

  .signup_container {
    width: 1280px;
    display: flex;
     justify-content: space-between;
  }

  .login-form {
    display: flex;
    flex-direction: column;
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

  @media (max-width: 834px) {
    padding: 60px 0 150px 0;

  .signup_container {
    width: 804px;

  }
  button {
    margin-right: 246px;
    letter-spacing: 0.75px;
    font-size: 16px;
line-height: 24px;
  }

  input {
    padding-right: 20px;
  }

  .men-pick {
   padding-top: 110px;
  }

}

`;
