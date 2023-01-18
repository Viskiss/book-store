import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 60px 0;
  :nth-child(4n) {
    margin-right: 0;
  }

  .book-info {
    position: relative;
    height: 270px;
    max-width: 305px;
    margin-top: 30px;
  }

  .cover {
    width: 305px;
    height: 448px;
  }

  .cover-book {
    display: flex;
    background-color: #35373724;
    width: 305px;
    height: 448px;
  }

  .book-title {
    text-decoration: none;
    color: #344966;
    font-size: 20px;
    line-height: 30px;
  }

  .book-author {
    font-size: 20px;
    line-height: 30px;
    color: #b9bac4;
    margin-top: 0;
  }

  .simple-button {
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 20px;
    line-height: 28px;
  }

  .rate {
    position: absolute;
    bottom: 60px;
  }
  .fill {
    color: #bfcc94;
  }
  .star-svg {
    margin-right: 15px;
  }

  .books-rate {
    .rate-number {
      position: absolute;
      bottom: 70px;
      right: 0;
      font-size: 16px;
      line-height: 24px;
      color: #b9bac4;
    }
  }
`;
