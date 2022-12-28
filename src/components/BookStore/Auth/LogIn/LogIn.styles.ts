import styled from 'styled-components';

export default styled.section`
  padding: 60px 0 150px 0;
  display: flex;
  justify-content: center;

  .login_container {
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .form-input {
    padding: 20px 148px 20px 64px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
  }

  .title {
    color: #0d1821;
    margin-bottom: 60px;
    margin-top: 0;
  }

  .image-box {
    position: relative;
  }

  .men-pick {
    width: 100%;
    height: auto;
  }

  .simple-button {
    margin-top: 20px;
    width: max-content;
  }

  @media (max-width: 1100px) {
    .input-section {
      padding: 0;
    }

    .form-input {
      padding: 20px 10px 20px 64px;
    }
  }

  @media (max-width: 900px) {
    padding: 60px 0 150px 0;

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
      height: 333px;
      width: 390px;
      padding-top: 20px;
    }
  }

  @media (max-width: 834px) {
    .form-input {
      padding: 20px 127px 20px 64px;
    }

    .men-pick {
      padding-top: 20px;
    }
  }

  @media (max-width: 680px) {
    padding: 60px 0 70px 0;

    .login_container {
      flex-direction: column;
      align-items: center;
    }

    .men-pick {
      margin-top: 40px;
    }
  }
`;
