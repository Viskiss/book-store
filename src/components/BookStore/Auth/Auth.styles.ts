import styled from 'styled-components';

export default styled.section`
  background: #f0f4ef;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #f0f4ef;
  display: flex;
  border-radius: 16px;
  margin-bottom: 150px ;

  .auth_container {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    img:nth-child(2) {
      right: 0;
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

  @media (max-width: 834px) {
    margin-bottom: 100px;
    .auth_container {
    width: 804px;

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
`;
