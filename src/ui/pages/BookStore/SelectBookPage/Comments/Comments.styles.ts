import styled from 'styled-components';

export default styled.div`
  margin-top: 70px;

  .comments-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .comment {
    display: grid;
    grid-template-columns: 0.1fr;
    grid-template-rows: auto;
    max-width: 738px;
    background: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.border.default};
    padding: 25px;
  }

  .comment__user {
    grid-area: 1 / 1 / 4 / 2;
    padding: 5px 20px 0 5px;
  }

  .comment__user-data {
    grid-area: 1 / 2 / 3 / 3;
    padding-top: 5px;
  }

  .comment__user-comment {
    grid-area: 3 / 2 / 4 / 3;
  }

  .comment-box__input {
    max-width: 698px;
    min-height: 88px;
    background: #f0f4ef;
    border: none;
    border-radius: ${(props) => props.theme.border.default};
    padding: 20px;
    resize: none;
    margin: 60px 0 30px 0;
  }

  .comments-box__title {
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: ${(props) => props.theme.fontSize.fs40};
    line-height: ${(props) => props.theme.lineHeight.lh60};
    color: ${(props) => props.theme.color.dark};
  }

  .comment-box__input::placeholder {
    font-weight: ${(props) => props.theme.fontWeight.small};
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh28};
    color: ${(props) => props.theme.color.grey};
  }

  .comment-box__form {
    display: flex;
    flex-direction: column;
  }

  .comment-box__button {
    max-width: 276px;
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh30};
    color: ${(props) => props.theme.color.white};
  }

  .comment__user-photo {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.border.round};
  }

  .comment__title {
    margin: 0;
    font-weight: ${(props) => props.theme.fontWeight.middleH};
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
  }

  .comment__date {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: ${(props) => props.theme.fontWeight.middle};
    font-size: ${(props) => props.theme.fontSize.fs12};
    line-height: ${(props) => props.theme.lineHeight.lh18};
    color: ${(props) => props.theme.color.grey};
  }

  .comment__text {
    margin: 0;
    font-weight: ${(props) => props.theme.fontWeight.middle};
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    letter-spacing: 0.75px;
    color: ${(props) => props.theme.color.blue};
  }

  @media (max-width: 930px) {
    .comment {
      max-width: 667px;
      grid-template-rows: 0.1fr;
    }

    .comment__user {
      padding: 30px 20px 77px 30px;
    }

    .comment-box__input {
      width: 100%;
    }
    .comment__text {
      line-height: ${(props) => props.theme.lineHeight.lh21};
    }
  }

  @media (max-width: 735px) {
    max-width: 550px;

    .comment__user {
      padding: 30px 20px 77px 30px;
    }

    .comment-box__input {
      width: 100%;
    }
    .comment__text {
      line-height: ${(props) => props.theme.lineHeight.lh21};
    }
  }

  @media (max-width: 575px) {
    margin-top: 20px;
    max-width: 290px;
    position: relative;

    .comment {
      display: grid;
      grid-template-columns: 0.1fr;
      grid-template-rows: 0.1fr;
      padding: 10px;
    }

    .comment__user {
      grid-area: 1 / 1 / 2 / 2;
      padding: 3px 13px 0 0;
    }

    .comment__user-data {
      grid-area: 1 / 2 / 2 / 3;
      padding: 0;
    }

    .comment__user-comment {
      grid-area: 2 / 1 / 3 / 3;
    }

    .comment__user-photo {
      width: 35px;
      height: 35px;
    }

    .comment__title {
      font-weight: 100;
      font-size: ${(props) => props.theme.fontSize.fs14};
      line-height: ${(props) => props.theme.lineHeight.lh21};
      letter-spacing: 0.75px;
    }

    .comment__date {
      font-size: ${(props) => props.theme.fontSize.fs10};
      line-height: ${(props) => props.theme.lineHeight.lh15};
    }

    .comment__text {
      font-size: ${(props) => props.theme.fontSize.fs12};
      line-height: ${(props) => props.theme.lineHeight.lh18};
    }

    .comments-box__title {
      font-size: ${(props) => props.theme.fontSize.fs18};
      line-height: ${(props) => props.theme.lineHeight.lh27};
    }

    .comment-box__input {
      width: 250px;
    }
  }
`;
