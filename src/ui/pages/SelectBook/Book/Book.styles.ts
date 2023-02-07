import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 0.1fr 0.1fr 1fr;
  /* grid-template-rows: 0fr 0.1fr 0.1fr 0.7fr; */
  /* grid-template-rows: 0.1fr; */
  margin-top: 20px;

  .book-cover__box {
    grid-area: 1 / 1 / 4 / 2;
  }
  .book-info__data {
    grid-area: 1 / 2 / 2 / 3;
  }
  .book-info__rate {
    height: fit-content;
    grid-area: 2 / 2 / 3 / 3;
    margin-bottom: 15px;
  }
  .book-info__box {
    grid-area: 3 / 2 / 4 / 3;
  }

  .book-cover {
    height: 779px;
    width: 522px;
    margin-right: 128px;
    background-color: rgb(165 165 165 / 18%);
  }

  .title {
    font-size: ${(props) => props.theme.fontSize.fs40};
    line-height: ${(props) => props.theme.lineHeight.lh60};
    color: ${(props) => props.theme.color.dark};
    margin: 0;
  }

  .book-author {
    font-size: ${(props) => props.theme.fontSize.fs24};
    line-height: ${(props) => props.theme.lineHeight.lh36};
    margin-top: 0;
  }

  .description {
    font-weight: ${(props) => props.theme.fontWeight.middle};
    line-height: ${(props) => props.theme.lineHeight.lh36};
    font-size: ${(props) => props.theme.fontSize.fs24};
    color: ${(props) => props.theme.color.dark};
    margin-top: 0;
    margin-bottom: 10px;
  }

  .text {
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    color: ${(props) => props.theme.color.blue};
    margin: 0 0 74px 0;
  }

  .disabled-button {
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh30};
    background: ${(props) => props.theme.color.grey};
    color: ${(props) => props.theme.color.white};
    cursor: default;
    padding: 10px 50px;
  }

  .simple-button {
    font-weight: ${(props) => props.theme.fontWeight.height};
    font-size: ${(props) => props.theme.fontSize.fs20};
    line-height: ${(props) => props.theme.lineHeight.lh30};
  }

  .buttons-box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 82px;
  }

  .buttons-box__title {
    font-size: ${(props) => props.theme.fontSize.fs16};
    line-height: ${(props) => props.theme.lineHeight.lh24};
    color: ${(props) => props.theme.color.dark};
    margin-top: 0;
  }

  @media (max-width: 1280px) {
    .book-cover {
      height: 679px;
      width: 422px;
      margin-right: 50px;
    }
  }

  @media (max-width: 930px) {
    max-width: 804px;
    .book-cover {
      height: 584px;
      width: 391px;
      margin-right: 21px;
    }

    .book-info__box {
    }

    .title {
      font-size: ${(props) => props.theme.fontSize.fs32};
      line-height: ${(props) => props.theme.lineHeight.lh48};
    }

    .book-author {
      font-size: ${(props) => props.theme.fontSize.fs20};
      line-height: ${(props) => props.theme.lineHeight.lh30};
    }

    .description {
      line-height: ${(props) => props.theme.lineHeight.lh36};
      font-size: ${(props) => props.theme.fontSize.fs16};
      margin-bottom: 22px;
    }

    .text {
      font-size: ${(props) => props.theme.fontSize.fs14};
      line-height: ${(props) => props.theme.lineHeight.lh21};
      margin: 0 0 50px 0;
    }

    .disabled-button {
      padding: 10px 22px;
    }

    .simple-button {
      padding: 10px 22px;
    }

    .buttons-box {
      gap: 20px;
    }

    .rate-box {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    .rate-box__stars {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 735px) {
    .book-cover {
      height: 434px;
      width: 241px;
    }
  }

  @media (max-width: 575px) {
    max-width: 290px;
    grid-template-columns: auto auto;
    grid-template-rows: auto;

    .book-cover__box {
      grid-area: 1 / 1 / 3 / 2;
    }
    .book-info__data {
      grid-area: 1 / 2 / 2 / 3;
    }
    .book-info__rate {
      grid-area: 2 / 2 / 3 / 3;
    }
    .book-info__box {
      max-width: 290px;
      margin-top: -10px;
      grid-area: 3 / 1 / 4 / 3;
    }

    .book-cover__box {
      max-height: 202px;
    }

    .book-info__data {
      max-width: 135px;
      white-space: break-spaces;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .book-info__rate {
    }

    .book-info__box {
      width: 100%;
    }

    .book-info__text {
      width: 100%;
    }

    .book-cover {
      height: 202px;
      width: 135px;
      margin-right: 20px;
    }

    .title {
      font-size: ${(props) => props.theme.fontSize.fs18};
      line-height: ${(props) => props.theme.lineHeight.lh20};
    }

    .book-author {
      font-size: ${(props) => props.theme.fontSize.fs12};
      line-height: ${(props) => props.theme.lineHeight.lh18};
    }

    .description {
      line-height: ${(props) => props.theme.lineHeight.lh21};
      font-size: ${(props) => props.theme.fontSize.fs14};
      margin-bottom: 15px;
    }

    .text {
      font-size: ${(props) => props.theme.fontSize.fs12};
      line-height: ${(props) => props.theme.lineHeight.lh18};
      margin: 0 0 30px 0;
    }

    .disabled-button {
      font-size: ${(props) => props.theme.fontSize.fs12};
      line-height: ${(props) => props.theme.lineHeight.lh18};
      width: 135px;
    }

    .simple-button {
      font-size: ${(props) => props.theme.fontSize.fs12};
      line-height: ${(props) => props.theme.lineHeight.lh18};
      width: 135px;
    }

    .rate-box__stars {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;
