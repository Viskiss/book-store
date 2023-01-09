import styled from 'styled-components';

export default styled.section`
  background: #f0f4ef;
  color: #f0f4ef;
  display: flex;
  border-radius: 16px;
  margin-bottom: 120px;

  .invite_container {
    width: 1280px;
    display: flex;
    justify-content: space-between;
  }

  .img_girl {
    padding: 0 98px;
  }

  @media (max-width: 1024px) {
    .invite_container {
      width: 804px;
      position: relative;
    }

    .img_girl {
      padding: 0 14px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  @media (max-width: 768px) {

   }

  @media (max-width: 425px) {
    .invite_container {
      max-width: 290px;
      flex-direction: column;
    }

    .img_girl {
      position: static;
      width: 253px;
      margin-bottom: -7px;
    }

    .img-back-invite {
      height: 140px;
      width: 232px;
      right: 0;
      top: 17px;
    }
    .block-text_main {
      padding: 0 0 54px 20px;
      font-size: 14px;
      line-height: 21px;

      h1 {
        margin-top: 20px;
        font-size: 18px;
        line-height: 27px;
      }
      p {
        margin-bottom: 20px;
      }

      .block_text {
        width: fit-content;
      }
    }
  }
`;
