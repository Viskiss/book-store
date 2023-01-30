import styled from 'styled-components';

export default styled.section`
  background: ${(props) => props.theme.color.white};
  display: flex;
  border-radius: ${(props) => props.theme.border.default};
  margin-top: 100px;
  width: 100%;
  height: 400px;
  justify-content: space-between;
  flex-direction: row-reverse;
  position: relative;

  .img-auth-banner {
    right: 0;
  }

  .auth-button {
    margin-right: 20px;
  }

  .castle-block {
    position: absolute;
    padding: 0 108px;
    left: 0;
    bottom: 0;
  }

  .block-text_auth {
    padding-left: 0;
    padding-right: 120px;
  }

  .auth-text {
    width: 415px;
  }

  @media (max-width: 1350px) {
    .block-text_auth {
      padding-right: 60px;
    }
    .castle-block {
      padding: 0 20px;
    }
    .auth-text {
      width: 300px;
    }
    .img-auth-banner {
      width: 456px;
    }
  }

  @media (max-width: 1110px) {
    .castle-block {
      position: static;
    }
    .castle-block__img-castle {
      width: 389px;
      padding-top: 50px;
    }
  }

  @media (max-width: 985px) {
    .block-text_auth {
      padding-right: 10px;
    }

    .auth-button {
      padding: 10px 10px;
    }

    .castle-block {
      padding: 0;
    }
  }

  @media (max-width: 840px) {
    .img-auth-banner {
      width: 320px;
    }
    .block-text_auth {
      padding-left: 0;
      padding-right: 80px;
    }
    .title {
      margin-top: 80px;
    }
  }

  @media (max-width: 805px) {
    .block-text_auth {
      padding-right: 0;
    }

    .castle-block__img-castle {
      width: 320px;
      padding-top: 80px;
      padding-left: 20px;
    }
    .auth-text {
      width: 250px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    height: 500px;

    .title {
      margin-top: 20px;
    }

    .castle-block__img-castle {
      width: 282px;
      padding-top: 0;
      padding-left: 0;
    }

    .img-auth-banner {
      width: 246px;
      top: -5px;
      right: 10px;
    }
    .block-text_main {
      padding: 0 40px 0 20px;
    }
  }
`;
