import styled from 'styled-components';

export default styled.section`
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
    font-family: "Poppins";
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin-bottom: 10px;
  }

  .text {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
    margin-bottom: 60px;
  }

  img {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1170px) {
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
  }
`;
