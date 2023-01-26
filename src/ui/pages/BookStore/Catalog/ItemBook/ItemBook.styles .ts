import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 60px 0;
  :nth-child(4n) {
    margin-right: 0;
  }

  .books-rate {
    display: flex;
  }

  .book-info {
    position: relative;
    height: 270px;
    max-width: 305px;
    margin-top: 30px;
  }

  .cover-book__like {
    opacity: 0.7;
    position: absolute;
    z-index: 1000;
    margin: 20px;
    padding: 10px 10px 6px 10px;
    border-radius: 100%;
  }

  .cover {
    width: 305px;
    height: 448px;
    border-radius: ${(props) => props.theme.border.default};
  }

  .cover-book {
    border-radius: ${(props) => props.theme.border.default};
    position: relative;
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

  .catalog-button {
    width: 100%;
  }

  .rate {
    margin-bottom: 30px;
  }

  .fill {
    color: #bfcc94;
  }
  .star-svg {
    margin-right: 15px;
  }

  .rate-number {
    font-size: 16px;
    line-height: 24px;
    color: #b9bac4;
    padding-top: 10px;
  }

  .cart-button {
    position: absolute;
    padding: 10px 50px;
    width: 100%;
    bottom: 0;
    font-size: 20px;
    line-height: 28px;
    border: 2px solid #0d1821;
    color: #0d1821;
    background-color: white;
  }
`;
