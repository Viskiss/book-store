import styled from 'styled-components';

export default styled.div`
  margin-top: 70px;

  .comments-box {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }

  .comment {
    display: grid;
    grid-template-columns: 0.1fr;
    grid-template-rows: auto;
    max-width: 690px;
    background: ${(props) => props.theme.color.background.light};
    border-radius: ${(props) => props.theme.border.radius.main};
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
    overflow: hidden;
  }

  .comment-box__input {
    max-width: 698px;
    min-height: 88px;
    background: #f0f4ef;
    border: none;
    border-radius: ${(props) => props.theme.border.radius.main};
    padding: 20px;
    resize: none;
    margin: 60px 0 30px 0;
  }

  .comments-box__title {
    font-weight: ${(props) => props.theme.font.weight.xl};
    font-size: ${(props) => props.theme.font.size.xxxl};
    line-height: ${(props) => props.theme.font.lineHeight.xxxl};
    color: ${(props) => props.theme.color.text.dark};
  }

  .comment-box__input::placeholder {
    font-weight: ${(props) => props.theme.font.weight.s};
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.sm};
    color: ${(props) => props.theme.color.text.medium};
  }

  .comment-box__form {
    display: flex;
    flex-direction: column;
  }

  .comment-box__button {
    max-width: 276px;
    font-size: ${(props) => props.theme.font.size.ml};
    line-height: ${(props) => props.theme.font.lineHeight.m};
    color: ${(props) => props.theme.color.text.light};
  }

  .comment__user-photo {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.border.radius.round};
  }

  .comment__title {
    margin: 0;
    font-weight: ${(props) => props.theme.font.weight.l};
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
  }

  .comment__date {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: ${(props) => props.theme.font.weight.m};
    font-size: ${(props) => props.theme.font.size.xxs};
    line-height: ${(props) => props.theme.font.lineHeight.xxxs};
    color: ${(props) => props.theme.color.text.medium};
  }

  .comment__text {
    margin: 0;
    font-weight: ${(props) => props.theme.font.weight.m};
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    letter-spacing: 0.75px;
    color: ${(props) => props.theme.color.text.main};
  }

  @media (max-width: 930px) {
    .comment {
      max-width: 667px;
      grid-template-rows: 0.7fr 0.5fr;
      padding: 20px;
    }

    .comment__user {
      padding: 0 20px 0 0;
    } 

    .comment-box__input {
      width: 100%;
    }

    .comment__text {
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
    } 
  }

  @media (max-width: 735px) {
    max-width: 550px;

    .comment-box__input {
      width: 100%;
    }
    .comment__text {
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
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
      font-size: ${(props) => props.theme.font.size.s};
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
      letter-spacing: 0.75px;
    }

    .comment__date {
      font-size: ${(props) => props.theme.font.size.xxxs};
      line-height: ${(props) => props.theme.font.lineHeight.xxxxs};
    }

    .comment__text {
      font-size: ${(props) => props.theme.font.size.xxs};
      line-height: ${(props) => props.theme.font.lineHeight.xxxl};
    }

    .comments-box__title {
      font-size: ${(props) => props.theme.font.size.m};
      line-height: ${(props) => props.theme.font.lineHeight.sm};
    }

    .comment-box__input {
      width: 250px;
    }
  }
`;
