import styled from 'styled-components';

export default styled.header`
  display: flex;
  justify-content: center;
  padding: 24px 80px 40px 80px;

  .small-width {
    display: none;
  }

  .header_container {
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 43px;
  }

  .logo {
    padding-right: 84px;
  }

  .catalog-link {
    text-decoration: none;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }

  .catalog-link:hover {
    color: #bfcc94;
  }

  .search {
    position: relative;
    padding-right: 58px;
  }

  .search-input {
    padding: 20px 265px 20px 64px;
    background: #f0f4ef;
    border-radius: 16px;
    border: none;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .search-input::placeholder {
    color: #b9bac4;
  }

  .search-input_button {
    padding: 22px 20px;
    cursor: pointer;
    position: absolute;
    border: none;
    background-color: initial;
  }

  .round-buttons {
    padding-left: 7px;
  }

  .round-button2 {
    margin: 0 27px;
  }

  @media (max-width: 1438px) {
    .round-button2 {
    margin: 0 10px;
  }
  }

  @media (max-width: 1422px) {
    .header_container {
      gap: 35px;
    }
    .search-input {
      padding: 20px 180px 20px 64px;
    }
    .logo {
      padding-right: 50px;
    }
  }

  @media (max-width: 1285px) {
    .header_container {
      gap: 30px;
    }
    .logo {
      padding-right: 50px;
    }
    .search-input {
      padding: 20px 160px 20px 64px;
    }

    
  }

  @media (max-width: 1255px) {
    .logo {
      padding-right: 30px;
    }
    .search-input {
      padding: 20px 130px 20px 64px;
    }
    .search {
      padding-right: 0;
    }
  }

  @media (max-width: 1152px) {
    .round-button2 {
    margin: 0 13px;
  }
  .round-buttons {
    padding-left: 16px;
  }
  }

  @media (max-width: 1141px) {
    .logo {
      padding-right: 20px;
    }
    .search-input {
      padding: 20px 60px 20px 64px;
    }
  }

  @media (max-width: 1061px) {
    .search-input {
      width: 260px;
    }
  }

  @media (max-width: 1001px) {
    .search-input {
      width: 200px;
    }
  }

  @media (max-width: 946px) {
    .search-input {
      width: 88px;
    }
  }

  @media (max-width: 835px) {
    padding: 20px 15px 45px 15px;

    .search {
      padding-right: 20px;
    }

    .search-input {
      width: 123px;
    }

    .catalog-link {
      padding-right: 43px;
    }
  }

  @media (max-width: 802px) {
    .header_container {
      gap: 20px;
    }

    .search {
      padding-right: 0;
    }

    .catalog-link {
      padding-right: 0;
    }

    .logo {
      padding-right: 0;
    }
  }

  @media (max-width: 679px) {
    .search-input {
      padding: 20px 14px 20px 64px;
    }

    .auth-button {
      padding: 7px;
    }
  }

  @media (max-width: 636px) {
    .round-button2 {
    margin: 0 7px;
  }

  .round-button {
    padding: 9px 10px 6px 9px;
  }
  .round-buttons {
    padding-left: 0;
  }
  }

  @media (max-width: 601px) {
    .header_container {
      display: none;
    }

    .small-width {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      max-width: 450px;
      gap: 17px;
    }

    .logo {
      width: 62px;
      height: 31px;
    }

    .catalog-link {
      font-size: 14px;
      line-height: 21px;
      margin: 0;
    }

    .search-input {
      padding: 13px 40px 13px 64px;
    }

    .search-input_button {
      padding: 15px 20px;
    }

    .search-input::placeholder {
      font-size: 12px;
      line-height: 28px;
    }

    .auth-button__small {
      padding: 10px;

      a {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.75px;
      }
    }
  }

  @media (max-width: 375px) {
    .auth-button__small {
      padding: 7px;
    }

    .round-button {
    padding: 7px 8px 4px 7px;
  }
}
`;
