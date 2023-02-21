import styled from 'styled-components';

export default styled.header<{ dark: boolean }>`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  border-bottom: ${(props) => (props.dark ? `2px solid ${props.theme.color.background.light}` : '')};

  .container {
    display: flex;
    justify-content: space-between;
    gap: 43px;
    padding: 24px 80px 20px 80px;
    max-width: 1280px;
  }

  .round-button__count {
    position: relative;
  }

  .logo-box {
    display: flex;
    align-items: center;
    margin-right: 84px;
  }

  .catalog-link-box {
    display: flex;
    align-items: center;
  }

  .books-counter {
    position: absolute;
    z-index: 1000;
    background: ${(props) => props.theme.color.info.light};
    border-radius: ${(props) => props.theme.border.radius.round};
    padding: 1px 5px;
    font-weight: ${(props) => props.theme.font.weight.xl};
    font-size: 10px;
    color: ${(props) => props.theme.color.text.dark};
    right: 2px;
    top: 0;
  }

  .catalog-link {
    text-decoration: none;
    font-weight: ${(props) => props.theme.font.weight.m};
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    color: ${(props) => (props.dark ? props.theme.color.text.light : props.theme.color.text.dark)};
  }

  .catalog-link:hover {
    color: ${(props) => props.theme.color.info.light};
  }

  .search {
    display: flex;
    position: relative;
    align-items: center;
    min-width: 630px;
    width: 100%;
    margin-right: 10px;
  }

  .search-input {
    padding: 20px 64px;
    background: ${(props) => props.theme.color.background.light};
    border-radius: ${(props) => props.theme.border.radius.main};
    border: none;
    font-weight: ${(props) => props.theme.font.weight.s};
    font-size: ${(props) => props.theme.font.size.sm};
    line-height: ${(props) => props.theme.font.lineHeight.xs};
    width: 100%;
    max-width: 502px;
  }

  .search-input::placeholder {
    color: ${(props) => props.theme.color.text.medium};
  }

  .search-input_button {
    z-index: 1000;
    padding: 22px 20px;
    cursor: pointer;
    position: absolute;
    border: none;
    background-color: initial;
  }

  .round-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    gap: 27px;
  }

  .round-button {
    display: flex;
    padding: 11px;
    border-radius: 100%;
  }

  .auth-button {
    padding: 10px 40px;
  }

  @media (max-width: 1280px) {
    .container {
      padding: 24px 15px 40px 15px;
      gap: 50px;
    }

    .logo-box {
      margin: 0;
    }

    .catalog-link-box {
      margin-right: 23px;
    }

    .search {
      min-width: 247px;
      margin: 0;
    }
  }

  @media (max-width: 800px) {
    .container {
      justify-content: space-evenly;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
    }

    .search {
      order: 4;
      max-width: unset;
      width: 100%;
      margin: 0;
    }
    .search-input {
      padding: 20px 190px 20px 64px;
    }

    .round-buttons {
      order: 3;
      padding-left: 0;
      flex: unset;
    }

    .auth-button {
      padding: 12px 35px 12px 35px;
    }

    .round-button {
      padding: 9px 10px 6px 9px;
    }
  }

  @media (max-width: 510px) {
    .container {
      padding: 24px 15px 40px 15px;
    }

    .round-button {
      padding: 7px;
    }

    .round-buttons {
      gap: 18px;
    }

    .round-button__img {
      max-width: 17px;
    }

    .auth-button {
      padding: 7px 10px;
    }

    .logo {
      width: 62px;
      height: 31px;
      padding-right: 0;
    }

    .catalog-link {
      font-size: ${(props) => props.theme.font.size.s};
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
      margin: 0;
    }

    .catalog-link-box {
      margin: 0;
    }

    .search-input::placeholder {
      font-size: ${(props) => props.theme.font.size.xxs};
      line-height: ${(props) => props.theme.font.lineHeight.sm};
    }

    .search-input {
      padding: 12px 64px;
    }

    .auth-button {
      padding: 10px 4px;
    }

    .books-counter {
      right: -3px;
      top: -2px;
    }
  }
`;
