import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  .block_text {
    width: 200px;
  }

  .block-text_main {
    padding-left: 108px;
    z-index: 1000;
  }

  h1 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #0d1821;
    margin-bottom: 10px;
  }

  p {
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

  @media (max-width: 1024px) {
    .block-text_main {
      padding: 0 0 56px 40px;
      z-index: 1000;
    }
    h1 {
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 0;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
  }
`;
