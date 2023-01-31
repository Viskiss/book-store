import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  :nth-last-child(1) {
    margin-bottom: 60px;
  }

  .comment-box__input {
    max-width: 694px;
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
`;
