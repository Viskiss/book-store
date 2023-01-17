import styled from 'styled-components';

export default styled.div`
  display: flex;

  .book-cover {
    height: 779px;
    width: 522px;
    margin-right: 128px;
    background-color: rgb(165 165 165 / 18%);
  }

  .title {
    font-size: 40px;
    line-height: 60px;
    margin: 0;
  }

  .book-author {
    font-size: 24px;
    line-height: 36px;
    margin-top: 0;
  }
  .description {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
  }

  .text {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 74px 0;
  }

  .disabled-button {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    background: #b9bac4;
    color: #f0f4ef;
    padding: 10px 50px;
  }

  .simple-button {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  .buttons-box {
    display: flex;
    justify-content: flex-start;
    gap: 82px;
    p {
      margin-top: 0;
    }
  }
`;
