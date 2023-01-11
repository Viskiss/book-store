import styled from 'styled-components';

export default styled.section`
  background: #f0f4ef;
  display: flex;
  border-radius: 16px;
  margin-bottom: 150px;

  .auth_container {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    img:nth-child(2) {
      right: 0;
    }

    .auth-button {
      margin-right: 20px;
    }

    .auth {
      padding: 0 130px 90px 20px;
    }

    .auth-text {
      width: 415px;
    }
  }

  .img-back-auth {
    right: 0;
  }

  .castle-block {
    position: relative;
  }

  .img_castle {
    padding: 0 108px;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 100px;

    .auth_container {
      max-width: 804px;

      .auth {
        padding: 40px 0 118px 0;
      }

      .auth-text {
        width: 392px;
      }
    }

    .castle-block {
      padding-top: 55px;
      position: static;
    }

    .img_castle {
      padding: 0px 21px 0 0;
      width: 389px;
      height: 345px;
      position: static;
      margin-bottom: -8px;
    }
  }

  @media (max-width: 768px) {
    .img-back-auth {
      left: -40px;
    }

    .auth_container {
      .auth-text {
        width: 250px;
        padding-right: 44px;
      }
    }
  }

  @media (max-width: 425px) {
    .auth_container {
      max-width: 290px;
      flex-direction: column;
      height: 500px;

      .auth {
        padding: 90px 0 100px 0;
      }
      .auth-text {
        width: 250px;
      }
      .block-text_main {
        padding-left: 20px;
      }
    }

    .auth {
      h1 {
        font-size: 18px;
        line-height: 27px;
        margin-top: -50px;
      }

      p {
        font-size: 14px;
        line-height: 21px;
      }
    }

    .img-back-auth {
      top: 0;
      left: 95px;
    }

    .img_castle {
      width: 290px;
      position: absolute;
      bottom: -35px;
    }

    .castle-block {
      padding-top: 0;
      position: relative;
    }
  }
`;
