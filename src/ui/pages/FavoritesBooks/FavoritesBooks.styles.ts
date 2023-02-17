import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  width: 100%;

  .favorite-container {
    display: -webkit-box;
  }

  .favorite__books {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .item-favorite__box {
    background: ${(props) => props.theme.color.background.light};
    border-radius: ${(props) => props.theme.border.radius.main};
    transition: 0.5s;
    height: fit-content;
    cursor: pointer;
  }

  .item-favorite__box:hover {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }

  .item-favorite__box-cover {
    position: relative;
  }

  .item-favorite__cover {
    padding: 15px;
    width: 305px;
    height: 448px;
    border-radius: ${(props) => props.theme.border.radius.main};
  }

  .item-favorite__like {
    position: absolute;
    right: 0;
    padding: 10px 10px 6px 10px;
    border-radius: ${(props) => props.theme.border.radius.round};
  }

  .item-favorite__box-data {
    padding: 0 10px 0 10px;
  }

  @media (max-width: 800px) {
    .favorite-container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 100px;
    }

    .favorite-container__img {
      height: 176px;
      padding-right: 0;
      margin-top: 40px;
    }
    .item-favorite__box-data {
      max-width: 265px;
    }

    .item-favorite__box-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-favorite__cover {
      padding: 10px;
      width: 255px;
      height: 398px;
    }
  }

  @media (max-width: 600px) {
    .item-favorite__box {
      display: flex;
      width: 100%;
    }
    .item-favorite__box-data {
      max-width: none;
    }

    .item-favorite__box-title {
      font-size: ${(props) => props.theme.font.size.m};
      line-height: ${(props) => props.theme.font.lineHeight.xxs};
      white-space: break-spaces;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-favorite__cover {
      padding: 10px;
      width: 135px;
      height: 202px;
    }
  }
`;
