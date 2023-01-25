import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .block-text_main {
    padding-left: 108px;
    z-index: 1000;
  }

  .block_text {
    width: 200px;
  }

  .title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin-bottom: 10px;
    margin-top: 80px;
  }

  .text {
    font-size: 20px;
    line-height: 30px;
    color: #344966;
    margin-bottom: 50px;
    margin-top: 0;
  }

  .block-text_img {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1215px) {
    .block-text_main {
      padding: 0 0 56px 40px;
      z-index: 1000;
    }
    .title {
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 0;
    }

    .text {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
    .block-text_img {
      width: 361px;
    }
  }

  @media (max-width: 970px) {
    .title {
      margin-top: 45px;
      margin-bottom: 10px;
      font-size: 25px;
    }
  }

  @media (max-width: 820px) {
    .title {
      font-size: 18px;
    }
    .block-text_img {
      width: 232px;
    }
  }

  @media (max-width: 600px) {
    .block-text_main {
      padding: 0 40px 0 20px;
    }

    .text {
      margin-bottom: 20px;
    }
    .title {
      margin-top: 5px;
    }
    .block-text_img {
      right: 0;
      bottom: 22px;
    }
  }
`;
