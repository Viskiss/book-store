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

  .user-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

  .load-avatar {
    input {
      width: 100%;
      height: 100%;
    }

    .drop-box {
      width: 100%;
      height: 100%;
      border-radius: 50px;
      height: 50px;
      width: 50px;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 20px;
      z-index: 1000;
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
    justify-content: space-between;
    margin-bottom: 10px;
  }

  @media (max-width: 1004px) {
    padding: 20px 0 104px 0;
    .img-profile {
      margin-right: 50px;
    }
  }

  @media (max-width: 900px) {
    .img-profile {
      width: 255px;
      height: 255px;
      margin-right: 20px;
      position: relative;

      .user-photo {
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

  @media (max-width: 720px) {
    .form-input {
      width: 60%;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    .form-input {
      width: 65%;
    }

    .img-profile_box {
      width: 100%;
      height: 100%;
      .img-profile {
        width: 100%;
        height: 100%;
        .user-photo {
          width: inherit;
          height: auto;
        }
        button {
          margin: 20px;
        }
      }
    }
  }
`;
