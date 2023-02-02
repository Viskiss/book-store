import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  .like-container {
    display: -webkit-box;
  }

  .liked__books {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .item-liked__box {
    background: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.border.default};
    transition: 0.5s;
    height: fit-content;
  }

  .item-liked__box:hover {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }

  .item-liked__box-cover {
    position: relative;
  }

  .item-liked__cover {
    padding: 15px;
    width: 305px;
    height: 448px;
    border-radius: ${(props) => props.theme.border.default};
  }

  .item-liked__like {
    position: absolute;
    right: 0;
    padding: 10px 10px 6px 10px;
    border-radius: ${(props) => props.theme.border.round};
  }

  .item-liked__box-data {
    padding: 0 10px 0 10px;
  }

  @media (max-width: 800px) {
    .like-container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 100px;
    }

    .like-container__img {
      height: 176px;
      padding-right: 0;
      margin-top: 40px;
    }
    .item-liked__box-data {
      max-width: 265px;
    }

    .item-liked__box-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-liked__cover {
      padding: 10px;
      width: 255px;
      height: 398px;
    }
  }

  @media (max-width: 600px) {
    .item-liked__box {
      display: flex;
      width: 100%;
    }
    .item-liked__box-data {
      max-width: none;
    }

    .item-liked__box-title {
      font-size: ${(props) => props.theme.fontSize.fs18};
      line-height: ${(props) => props.theme.lineHeight.lh20};
      white-space: break-spaces;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .item-liked__cover {
      padding: 10px;
      width: 135px;
      height: 202px;
    }
  }
`;
