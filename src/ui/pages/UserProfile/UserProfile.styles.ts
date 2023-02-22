import styled from 'styled-components';

export default styled.section`
  display: flex;
  padding: 20px 330px 100px 0;
  justify-content: center;

  section {
    padding-right: 0;
  }

  .search-input {
    padding-right: 143px;
  }

  .form-input {
    padding: 20px 143px 20px 64px;
  }

  .user-photo {
    width: 305px;
    height: 305px;
    object-fit: contain;
    background-color: ${(props) => props.theme.color.background.light};
  }

  .img-profile {
    width: 305px;
    height: 305px;
    margin-right: 128px;
    position: relative;
  }

  .add-avatar {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px;
    padding: 10px 10px;
    border-radius: ${(props) => props.theme.border.radius.round};
  }

  .exit-box {
    display: flex;
  }

  .exit-box__button {
    position: static;
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.button.main};
    border: none;
    color: ${(props) => props.theme.color.text.light};
    font-weight: ${(props) => props.theme.font.weight.xl};
    cursor: pointer;
  }

  .load-avatar__input {
    width: 100%;
    height: 100%;
    cursor: pointer;
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

    input::-webkit-file-upload-button {
      visibility: hidden;
    }
  }

  .label {
    margin-bottom: 10px;
  }

  .data-box {
    position: relative;
  }

  .data-box__label {
    z-index: 1000;
    position: absolute;
    font-size: ${(props) => props.theme.font.size.s};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    color: ${(props) => props.theme.color.text.main};
    letter-spacing: 0.75px;
    left: 64px;
  }

  .data-box__label-old-password {
    color: ${(props) => props.theme.color.text.dark};
  }

  .form-user-data {
    margin-bottom: 20px;
  }

  .user-change-preview__title {
    font-weight: ${(props) => props.theme.font.weight.m};
    font-size: ${(props) => props.theme.font.size.ml};
    line-height: ${(props) => props.theme.font.lineHeight.m};
    color: ${(props) => props.theme.color.text.dark};
    margin-top: 0;
  }

  .user-change-preview__link {
    color: ${(props) => props.theme.color.info.main};
    font-weight: ${(props) => props.theme.font.weight.m};
    font-size: ${(props) => props.theme.font.size.s};
    line-height: ${(props) => props.theme.font.lineHeight.xxs};
  }

  a:hover {
    color: ${(props) => props.theme.color.text.main};
    font-weight: bold;
  }

  .user-change-preview {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
    padding: 20px 0 104px 0;
  }

  @media (max-width: 1004px) {
    .img-profile {
      margin-right: 50px;
    }
  }

  @media (max-width: 900px) {
    .exit-box__button {
      position: static;
    }

    .img-profile {
      width: 255px;
      height: 255px;
      margin-right: 20px;
      position: relative;
    }

    .user-photo {
      width: 255px;
      height: 255px;
    }

    .add-avatar {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 15px;
    }
  }

  @media (max-width: 710px) {
    flex-direction: column;
    align-items: center;
    max-width: 290px;

    .form-input {
      padding: 20px 20px 20px 64px;
    }

    .form-user__box {
      max-width: 290px;
    }

    .form-user-data {
      margin-top: 50px;
    }
  }
`;
