import styled from 'styled-components';

export default styled.section`
  padding: 60px 0 150px 0;
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
