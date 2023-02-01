import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  :nth-last-child(1) {
    margin-bottom: 60px;
  }

  .comment-box__input {
    max-width: 698px;
    min-height: 88px;
    background: #f0f4ef;
    border: none;
    border-radius: ${(props) => props.theme.border.default};
    padding: 20px;
    resize: none;
    margin-bottom: 30px;
  }

  .comments-box__title {
    margin-top: 110px;
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

  .comment {
    display: flex;
    max-width: 738px;
    background: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.border.default};
  }

  .comment__user {
    padding: 30px 20px 97px 30px;
  }

  .comment__user-photo {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.border.round};
  }

  .comment__user-data {
    padding: 35px 30px 25px 0;
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
    max-width: 667px;

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
    max-width: 290px;
    position: relative;

    :nth-child(1) {
      margin-top: 300px;
    }

    .comment__user-data {
      max-width: 170px;
      white-space: break-spaces;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .comment__text {
      position: absolute;
      left: 15px;
      top: 100px;
    }

    :nth-last-child(1) {
      margin-bottom: 20px;
    }

    .comment__title {
      font-size: ${(props) => props.theme.fontSize.fs14};
      line-height: ${(props) => props.theme.lineHeight.lh21};
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
      display: none;
    }

    .comment-box__input {
      width: 250px;
    }
  }
`;
