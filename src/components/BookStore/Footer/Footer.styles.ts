import styled from 'styled-components';

export default styled.footer`
  background: #0d1821;
  width: 100%;
  padding: 73px 20px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #f0f4ef;
  display: flex;
  justify-content: center;

  p {
    margin-bottom: 5px;
    margin-top: 0;
  }

  .logo {
    margin-bottom: 30px;
  }

  .footer_container {
    width: 1280px;
    display: flex;
    align-items: flex-start;
    gap: 166px;
    justify-content: center;
  }

  .map_location {
    padding-left: 149px;
  }

  @media (max-width: 834px) {
    padding: 73px 0 79px 0;
    font-size: 16px;
    line-height: 24px;
    justify-content: space-between;

    .footer_container {
      padding-left: 10px;
      max-width: 804px;
      gap: 50px;
    }

    .map_location {
      padding-left: 0;
      img {
        width: 392px;
      }
    }
  }
`;
