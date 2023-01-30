import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  margin-top: 110px;

  .comment-box__input {
    max-width: 694px;
    min-height: 88px;
    background: #F0F4EF;
    border: none;
    border-radius: 16px;
    padding: 20px;
    resize: none;
  }

  .comment-box__input::placeholder {
    font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #B9BAC4
  }

  .comment-box__form {
    display: flex;
    flex-direction: column;
  }

  .comment-box__button {
    max-width: 276px;
  }
`;
