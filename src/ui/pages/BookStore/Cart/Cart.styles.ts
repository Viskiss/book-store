import styled from 'styled-components';

export default styled.section`
  .cart_container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 150px;
    margin-top: 80px;
  }
  
  .img_book {
    height: 261px;
  }

  .block-text_main {
      .block_text {
        width: 465px;
      }
    }
  
  .cart-button {
      border: 2px solid #0D1821;
      color: #0D1821;
    background-color: white;
    }

  @media (max-width: 834px) {
    .cart_container {
      justify-content: flex-start;
    }

    .img_book {
      height: 212px;
      padding-right: 62px;
    }

    .block-text_main {
      padding: 0;

      .title {
        font-size: 18px;
        line-height: 27px;
      }

      .text {
        font-size: 12px;
        line-height: 18px;
      }

      .block_text {
        width: 310px;
      }
    }
  }

  @media (max-width: 750px) {
    .cart_container {
      flex-direction: column-reverse;
      align-items: center;
      padding-bottom: 100px;
    }

    .img_book {
      height: 176px;
      padding-right: 0;
      margin-top: 40px;
    }

    .block-text_main {
      .block_text {
        width: 233px;
      }

      button {
        font-size: 12px;
        line-height: 18px;
        padding: 8px 90px;
      }
    }
  }

`;
