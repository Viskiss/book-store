import styled from 'styled-components';

export default styled.header`
  padding: 24px 20px 40px 20px;
  .small-width {
    display: none;
  }

  .header_container {
    width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 43px;
  }

  .logo {
    margin-right: 84px;
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
    padding-right: 54px;
  }

  .search-input {
    padding: 20px 251px 20px 64px;
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

  .round-button {
    margin-left: 25px;
    padding: 10px 12px 8px 12px;
    border-radius: 50px;
  }

  @media (max-width: 1024px) {
    padding: 24px 15px 40px 15px;
    .header_container {
      max-width: 804px;
      gap: 40px;
    }
    .logo {
      margin-right: 0;
    }
    .catalog-link {
      margin-right: 22px;
    }

    .search-input {
      padding: 20px 0 20px 64px;
      max-width: 183px;
    }

    .search-input::placeholder {
      max-width: 100px;
      letter-spacing: 0.75px;
    }
    .search {
      padding-right: 0;
    }
  }

  @media (max-width: 768px) {
    .header_container {
      justify-content: center;
    }
  }

  @media (max-width: 425px) {
    .header_container {
      display: none;
    }

    .small-width {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      max-width: 290px;
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
      padding: 5px;
      a {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.75px;
      }
    }
  }
`;
