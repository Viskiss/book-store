import styled from 'styled-components';

export default styled.section`
  display: flex;
  padding: 20px 360px 100px 0;
  section {
    padding-right: 0;
  }

  .search-input {
    padding-right: 143px;
  }

  .img-profile {
    width: 305px;
    height: 305px;
    margin-right: 128px;
    position: relative;

    button {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 20px;
    }
  }

  .label {
    margin-bottom: 10px;
  }

  .data-box {
    position: relative;

    label {
      z-index: 1000;
      position: absolute;
      font-size: 14px;
      line-height: 24px;
      color: #344966;
      letter-spacing: 0.75px;
      left: 64px;
    }
  }

  .form-user-data {
    margin-bottom: 20px;
  }

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-top: 0;
  }

  a {
    color: #8d9f4f;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }

  a:hover {
    color: #344966;
    font-weight: bold;
  }
  .user-change_preview {
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin-bottom: 10px;
  }

  @media (max-width: 834px) {
  padding: 20px 10px 104px 0;
  .img-profile {
    width: 255px;
    height: 255px;
    margin-right: 20px;
    position: relative;

    .user-photo{
      width: 255px;
      height: 255px;
    }

    button {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 15px;
    }
  }
  }
`;
