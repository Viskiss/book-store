import styled from 'styled-components';

export default styled.header`
  display: flex;
  justify-content: center;
  padding: 24px 80px 40px 80px;

  .round-button__count {
    position: relative;
  }

  .books-counter {
    position: absolute;
    z-index: 1000;
    background: ${(props) => props.theme.color.green};
    border-radius: ${(props) => props.theme.border.round};
    padding: 1px 5px;
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: 10px;
    color: ${(props) => props.theme.color.dark};
    right: 2px;
    top: 0;
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
    font-weight: ${(props) => props.theme.fontWeight.middle};
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    color: ${(props) => props.theme.color.dark};
  }

  .catalog-link:hover {
    color: ${(props) => props.theme.color.green};
  }

  .search {
    position: relative;
    padding-right: 30px;
  }

  .search-input {
    padding: 20px 166px 20px 64px;
    background: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.border.default};
    border: none;
    font-weight: ${(props) => props.theme.fontWeight.small};
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
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
    margin: 0 27px;
    padding: 9px 11px;
    border-radius: 100%;
  }

  @media (max-width: 1438px) {
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

    .round-button {
      margin: 0 15px;
    }

    .logo {
      padding-right: 50px;
    }

    .search-input {
      padding: 20px 160px 20px 64px;
    }

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

  @media (max-width: 1000px) {
    .logo {
      padding-right: 20px;
    }

    .round-button {
      margin: 0 12px;
    }

    .search-input {
      padding: 20px 60px 20px 64px;
    }

    .search-input {
      width: 250px;
    }

    .round-button {
      margin: 0 10px;
    }

    .search {
      padding-right: 20px;
    }

    .search-input {
      width: 123px;
    }

    .catalog-link {
      padding-right: 43px;
    }

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

  @media (max-width: 775px) {

    .header_container {
      flex-direction: row;
    flex-wrap: wrap;
    }

    .logo__link {
      order: 1;
    }

    .catalog-link {
      order: 2;
    }

    .search {
      order: 4;
      width: 100%;
    }

    .round-buttons {
      order: 3;
      padding-left: 0;
    }

    .search-input {
      padding: 20px 80px 20px 64px;
      width: -webkit-fill-available;
    }

    .auth-button {
      padding: 7px;
    }

    .round-button {
      padding: 9px 10px 6px 9px;
    }

  }

  @media (max-width: 600px) {
    padding: 24px 15px 40px 15px;

    .round-button {
      padding: 5px 6px 2px 5px;
      margin: 3px;
    }

    .logo {
      width: 62px;
      height: 31px;
    }

    .catalog-link {
      font-size: ${(props) => props.theme.fontSize.fs14};
      line-height: ${(props) => props.theme.lineHeight.lh21};
      margin: 0;
    }


    .search-input::placeholder {
      font-size: ${(props) => props.theme.fontSize.fs12};
      line-height: ${(props) => props.theme.lineHeight.lh28};
    }

  }

  @media (max-width: 380px) {
    .header_container {
      max-width: 290px;
    }

}

`;
