import styled from 'styled-components';

export default styled.section`
  padding: 60px 0 150px 0;
  display: flex;

  .login_container {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
  }

  .login-form {
    display: flex;
    flex-direction: column;
  }

  .title {
    color: #0D1821;
    margin-bottom: 60px;
    margin-top: 0;
  }

  button {
    margin-right: 316px;
  }

  @media (max-width: 1240px) {

    .input-section {
      padding: 0;
    }

    .form-input {
      padding: 20px 10px 20px 64px;
    }
  }

  @media (max-width: 834px) {
    padding: 60px 0 150px 0;

    .login_container {
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
      padding-top: 20px;
    }
  }
`;
