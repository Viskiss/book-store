import styled from 'styled-components';

export default styled.section`
  position: relative;
  padding-right: 54px;

  .search-input {
    padding: 20px 34px 20px 64px;
    background: #f0f4ef;
    border-radius: 16px;
    border: none;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    position: relative;
  }

  .error-input {
    border: 2px solid #ED2E7E;
  }

  .success-input {
    border: 2px solid #00BA88;
  }

  .search-input::placeholder {
    color: #b9bac4;
  }

  .search-input_button {
    padding: 22px 20px;
    position: absolute;
    border: none;
    background-color: initial;
    z-index: 100;
  }

  .search-input_button--close {
    padding: 22px 20px;
    position: absolute;
    border: none;
    background-color: initial;
    right: -255px
  }

  .label {
    color: #0d1821;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 40px;
    padding-top: 10px;
  }

  .label-error {
    color: red;
    font-family: "Poppins";
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 40px;
    padding-top: 10px;
  }

  @media (max-width: 834px) {
    padding-right: 15px;
    .search-input {
    padding: 20px 13px 20px 64px;
  }
  }
`;
