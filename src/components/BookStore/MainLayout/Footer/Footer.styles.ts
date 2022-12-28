import styled from 'styled-components';

export default styled.footer`
  background: #0d1821;
  background-size: 100%;
  padding: 73px 80px;
  padding-left: 0 inherit;
  display: flex;
  justify-content: center;

  .footer_container {
    max-width: 1280px;
    display: flex;
    align-items: flex-start;
    gap: 166px;
    justify-content: center;
  }

  .text {
    margin-bottom: 5px;
    margin-top: 0;
    color: #f0f4ef;
  }

  .footer__router-links {
    display: flex;
    flex-direction: column;

    .footer__router-link {
      text-decoration: none;
      margin-bottom: 10px;
      margin-top: 0;
      font-size: 20px;
      line-height: 30px;
      color: #f0f4ef;
    }
  }

  .logo {
    margin-bottom: 30px;
  }

  .map_location {
    padding-left: 149px;
  }

  @media (max-width: 1280px) {
    .footer_container {
      gap: 70px;
    }

    .map_location {
      padding-left: 100px;
    }
  }

  @media (max-width: 990px) {
    padding: 73px 15px 79px 15px;
    font-size: 16px;
    line-height: 24px;

    .footer_container {
      max-width: 803px;
    }

    .map_location {
      padding-left: 0;

      .map_location-img {
        width: 300px;
      }
    }
  }

  @media (max-width: 804px) {
    .footer_container {
      gap: 30px;
    }
  }

  @media (max-width: 730px) {
    padding: 73px 15px 30px 15px;

    .footer_container {
      max-width: 290px;
      flex-direction: column;
      gap: 40px;
    }

    .map_location {
      display: flex;
      flex-direction: column;
      align-items: center;

      .map_location-img {
        width: 280px;
        height: 160px;
      }
    }
  }
`;
